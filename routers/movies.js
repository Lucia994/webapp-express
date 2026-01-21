import express from "express";
import moviesController from "../controller/moviesController.js";

const router = express.Router();


// index
router.get('/', moviesController.index)

// show
router.get('/:id', moviesController.show)

//store
// router.post('/', moviesController.store)

//update
// router.put('/:id', moviesController.update)

//modify
// router.patch('/:id', moviesController.modify);

//destroy
// router.delete('/:id', moviesController.destroy)

export default router;