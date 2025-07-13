const mongoose = require('mongoose');



const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  githubProjectLink: {
    type: String,
    required: true
  },
  previewProjectLink: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);