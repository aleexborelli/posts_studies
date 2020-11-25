import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  id_posts: string;

  @Column()
  content: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Post;
