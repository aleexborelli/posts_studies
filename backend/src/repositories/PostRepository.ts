import { getRepository, Repository } from 'typeorm';
import CreatePostDTO from '../dtos/CreatePostDTO';
import Post from '../models/Post';
import IPostRepository from './IPostRepository';

class PostRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async findByUserId(user_id: string): Promise<Post | undefined> {
    return this.ormRepository.findOne({
      where: { user_id },
    });
  }

  public async create({ content, user_id }: CreatePostDTO): Promise<Post> {
    const post = await this.ormRepository.create({
      content,
      user_id,
    });

    await this.ormRepository.save(post);

    return post;
  }

  public async save(post: Post): Promise<Post> {
    return this.ormRepository.save(post);
  }
}

export default PostRepository;
