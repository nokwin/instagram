import { api } from "../../infra/api";
import { Post } from "../domain/post.entity";
import { PostResponseDto } from "./dto/post-response.dto";
import { PostRepo } from "./post.repo";

export const POST_HTTP_REPO = "POST_HTTP_REPO";

export class PostHttpRepo implements PostRepo {
  async getPosts(): Promise<Post[]> {
    const { data } = await api.get<PostResponseDto>("/api/post");

    return data.map((post) => {
      return new Post({
        id: post.id,
        author: post.author,
        photo: post.photo,
        likes: post.likes,
        description: post.description,
        comments: post.comments,
        publishedAt: new Date(post.publishedAt),
      });
    });
  }
}
