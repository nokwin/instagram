import { makeAutoObservable } from "mobx";

type Author = {
  id: string;
  username: string;
  avatar: string;
};

export type Comment = {
  id: string;
  author: Author;
  text: string;
};

type PostArgs = {
  id: string;
  author: Author;
  photo: string;
  likes: number;
  description: string;
  comments: Comment[];
  publishedAt: Date;
};

export class Post {
  readonly id: string;
  private _author: Author;
  private _photo: string;
  private _likes: number;
  private _description: string;
  private _comments: Comment[];
  private _publishedAt: Date;

  constructor(args: PostArgs) {
    this.id = args.id;
    this._author = args.author;
    this._photo = args.photo;
    this._likes = args.likes;
    this._description = args.description;
    this._comments = args.comments;
    this._publishedAt = args.publishedAt;

    makeAutoObservable(this);
  }

  public get author(): Author {
    return this._author;
  }

  public get photo(): string {
    return this._photo;
  }

  public get likes(): number {
    return this._likes;
  }

  public get description(): string {
    return this._description;
  }

  public get comments(): Comment[] {
    return this._comments;
  }

  public get publishedAt(): Date {
    return this._publishedAt;
  }

  public get topComments(): Comment[] {
    return this.comments.slice(0, 2);
  }
}
