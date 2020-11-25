import { Request, Response } from 'express';
import PostRepository from '../repositories/PostRepository';
import CreatePostService from '../services/CreatePostService';

class PostController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content, user_id } = request.body;

    const postRepository = new PostRepository();
    const createPost = new CreatePostService(postRepository);

    const user = await createPost.execute({
      content,
      user_id,
    });

    delete user.password;

    return response.json(user);
  }
}

export default PostController;
