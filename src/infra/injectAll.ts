import { PostHttpRepo, POST_HTTP_REPO } from "../post/api/post.http-repo";
import { PostService, POST_SERVICE } from "../post/domain/post.service";
import { injector } from "./Injector";

injector.set(POST_HTTP_REPO, new PostHttpRepo());
injector.set(POST_SERVICE, new PostService());
