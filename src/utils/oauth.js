const { OAuth2Client } = require('google-auth-library');
const User = require('../models/userModel');
const jwt = require('./jwt');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
}

async function findOrCreateUser(profile) {
    let user = await User.findOne({ googleId: profile.sub });
    if (!user) {
        user = new User({
            username: profile.name,
            googleId: profile.sub,
            email: profile.email,
        });
        await user.save();
    }
    return user;
}

async function loginWithGoogle(token) {
    const profile = await verifyGoogleToken(token);
    const user = await findOrCreateUser(profile);
    const accessToken = jwt.generateToken(user);
    return { user, accessToken };
}

module.exports = {
    loginWithGoogle,
};