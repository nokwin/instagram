import { Route, Switch } from "react-router";
import { NewPost } from "../components/new-post/new-post.component";
import { PostList } from "../components/post-list/post-list.component";

export const PostEntrypoint = () => {
  return (
    <Switch>
      <Route exact path="/" component={PostList} />
      <Route path="/new-post" component={NewPost} />
    </Switch>
  );
};
