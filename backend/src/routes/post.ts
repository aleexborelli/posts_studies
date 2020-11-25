import { Router } from 'express';
import PostController from '../controllers/PostController';

const postRoutes = Router();
const postController = new PostController();

postRoutes.post('/', postController.create);

export default postRoutes;
