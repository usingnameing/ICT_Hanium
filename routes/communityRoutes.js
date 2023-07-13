const express = require('express');
const {upload}=require('../config');
const uploadController = require('../controllers/uploadController');
const commentController = require('../controllers/commentController');
const authMiddleware=require('../middleware/authMiddleware');

const router = express.Router();


// authMiddleware를 통과후 controller로 이동
console.log('도착1');
router.post('/upload', upload.array('files', 10),authMiddleware, uploadController.uploadpost);
router.delete('/:tpostid', authMiddleware, uploadController.deletepost);
router.put('/:tpostID', upload.array('files', 10),authMiddleware, uploadController.updatePost);

// comment 부분
router.post('/comments/:tpostID',authMiddleware, commentController.addComment);
router.delete('/comments/:tpostID',authMiddleware, commentController.deleteComment);

module.exports = router;
