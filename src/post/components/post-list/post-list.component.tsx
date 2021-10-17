import { useEffect } from "react";
import { observer } from "mobx-react";
import { usePostService } from "../../domain/post.service";
import { Post } from "../post/post.component";

export const PostList = observer(() => {
  const postService = usePostService();

  useEffect(() => {
    postService.getPosts();
  }, []);

  return (
    <>
      {postService.posts.map((p) => (
        <Post key={`post-${p.id}`} item={p} />
      ))}
    </>
  );
});
