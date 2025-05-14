import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } from '../../controllers/userController.js';

// /api/users
router.route('/').get(getUsers).post(createUser).put(updateUser).delete(deleteUser);

//extra
router.route('/:userId').get(getSingleUser)
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export default router;
