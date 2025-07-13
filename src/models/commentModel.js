const mongoose = require("mongoose");
const Counter = require('./counterModel');

const commentSchema = new mongoose.Schema({
  commentId: {
    type: Number,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

commentSchema.pre('save', async function(next) {
  try {
    if (!this.commentId) {
      const counter = await Counter.findOneAndUpdate(
        { _id: 'commentId' },
        { $inc: { seq: 1 } },
        { upsert: true, new: true }
      );
      this.commentId = counter.seq;
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Comment", commentSchema);