import { OAuth2Client } from 'google-auth-library';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const registerUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    return await newUser.save();
};

export const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
    throw new Error('Invalid credentials');
};

export const googleSignIn = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email } = ticket.getPayload();
    let user = await User.findOne({ email });
    if (!user) {
        user = new User({ username: name, email });
        await user.save();
    }
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};