import express from 'express';
import {
    createBoss,
    getAllBosses,
    getOneBoss,
    updateOneBoss,
    deleteOneBoss
} from '../controllers/boss-controller.js'

const router = express.Router();

router
    .route('/')
    .post(createBoss)
    .get(getAllBosses);

router
    .route('/:id')
    .get(getOneBoss)
    .put(updateOneBoss)
    .delete(deleteOneBoss);


export default router;