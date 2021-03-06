import { makeAutoObservable, runInAction } from "mobx";
import { injector } from "../../infra/Injector";
import { PostHttpRepo, POST_HTTP_REPO } from "../api/post.http-repo";
import { Post } from "./post.entity";

export const POST_SERVICE = "POST_SERVICE";

export class PostService {
  private _posts: Post[] = [];
  private _newPost: File | null = null;

  constructor(
    private readonly postRepo = injector.get<PostHttpRepo>(POST_HTTP_REPO)
  ) {
    makeAutoObservable(this);
  }

  public get posts(): Post[] {
    return this._posts;
  }

  public get newPost(): File | null {
    return this._newPost;
  }

  public set newPost(value: File | null) {
    this._newPost = value;
  }

  public async getPosts() {
    const posts = await this.postRepo.getPosts();

    runInAction(() => {
      this._posts = posts;
    });
  }
}

export const usePostService = () => injector.get<PostService>(POST_SERVICE);
