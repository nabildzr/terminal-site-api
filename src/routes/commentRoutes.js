const express = require('express');
const { createComment, updateComment, deleteComment, getAllComments } = require('../controllers/commentController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, createComment);
router.put('/update/:id', authMiddleware, updateComment);
router.delete('/delete/:id', authMiddleware, deleteComment);
router.get('/', getAllComments);

module.exports = router;