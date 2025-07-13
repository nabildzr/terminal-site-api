const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

const registerUser = async (userData) => {
    const { username, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    return await newUser.save();
};

const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
    
    const token = jwt.generateToken(user._id);
    return { user, token };
};

const findUserById = async (userId) => {
    return await User.findById(userId);
};

const updateUser = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

module.exports = {
    registerUser,
    loginUser,
    findUserById,
    updateUser,
    deleteUser,
};