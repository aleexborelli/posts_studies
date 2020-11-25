import IPostRepository from '../repositories/IPostRepository';
import PostRepository from '../repositories/PostRepository';

interface Request {
  content: string;
  user_id: string;
}

class CreatePostService {
  private postRepository: IPostRepository;

  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  public async execute({ content, user_id }: Request): Promise<Post> {
    const post = await this.postRepository.create({
      content,
      user_id,
    });

    return post;
  }
}

export default CreatePostService;
