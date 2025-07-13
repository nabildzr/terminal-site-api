const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    const comment = new Comment({
      userId: req.user.id,
      username: req.body.username,
      content: req.body.content,
    });
    
    await comment.save();
    console.log(comment);
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    console.log(comment);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({
      commentId: req.params.id,
    });
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    console.log(comment);
    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    console.log(comments);
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
