const { Router } = require('express');
const commentController = require('../controllers/comment.controllers');
const router = Router();

router.get('/:id',commentController.get_comment_items);
router.post('/:id',commentController.add_comment_item);
router.put('/:id',commentController.update_item);
router.get('/comment', commentController.getComments);
router.delete('/comment/:productId/:userId',commentController.delete_item);
module.exports = router;