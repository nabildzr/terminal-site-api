import Comment from '../models/commentModel.js';

export const createComment = async (data) => {
    const comment = new Comment(data);
    return await comment.save();
};

export const getComments = async () => {
    return await Comment.find();
};

export const updateComment = async (id, data) => {
    return await Comment.findByIdAndUpdate(id, data, { new: true });
};

export const deleteComment = async (id) => {
    return await Comment.findByIdAndDelete(id);
};