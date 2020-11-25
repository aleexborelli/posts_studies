import { Router } from 'express';
import userRoutes from './user';
import sessionRoutes from './session';
import postRoutes from './post';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => {
  return response.json({ message: 'API POSTS' });
});

routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/sessions`, sessionRoutes);
routes.use(`${prefixRoutes}/posts`, postRoutes);

export default routes;
