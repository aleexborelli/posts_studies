import CreatePostDTO from '../dtos/CreatePostDTO';
import Post from '../models/Post';

export default interface IPostRepository {
  findByUserId(user_id: string): Promise<Post | undefined>;
  create(createPostDTO: CreatePostDTO): Promise<Post>;
  save(post: Post): Promise<Post>;
}
