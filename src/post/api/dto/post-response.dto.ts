export type PostResponseDto = {
  id: string;
  author: {
    id: string;
    username: string;
    avatar: string;
  };
  photo: string;
  likes: number;
  description: string;
  comments: {
    id: string;
    author: {
      id: string;
      username: string;
      avatar: string;
    };
    text: string;
  }[];
  publishedAt: string;
}[];
