import { Post } from "../domain/post.entity";

export interface PostRepo {
  getPosts(): Promise<Post[]>;
}
