import { Router } from 'express';
const router = Router();
import { getSingleThoughts, getThoughts, createThoughts, removeThoughts, createReaction, deleteReaction } from '../../controllers/thoughtController.js';

// /api/thought
router.route('/').get(getThoughts).post(createThoughts);
// /api/users/:thoughtId
router.route('/:thoughtId').get(getSingleThoughts).delete(removeThoughts);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

export default router;
