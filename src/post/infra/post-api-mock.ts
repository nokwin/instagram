import MockAdapter from "axios-mock-adapter/types";
import { datatype, date, internet, lorem } from "faker";

const authorsDatabase = new Array(5).fill(1).map(() => ({
  id: datatype.uuid(),
  username: internet.userName(),
  avatar: internet.avatar(),
}));

const generateComments = (arrayLength: number) =>
  new Array(arrayLength).fill(1).map(() => ({
    id: datatype.uuid(),
    author: authorsDatabase[datatype.number(authorsDatabase.length - 1)],
    text: lorem.sentence(),
  }));

const postsDatabase = new Array(20).fill(1).map(() => ({
  id: datatype.uuid(),
  author: authorsDatabase[datatype.number(authorsDatabase.length - 1)],
  photo: `https://picsum.photos/1080/614?${datatype.uuid()}`,
  likes: datatype.number(10000),
  description: lorem.sentences(),
  comments: generateComments(datatype.number(70)),
  publishedAt: date.past(),
}));

export const postApiMock = (mock: MockAdapter) => {
  mock.onGet("/api/post").reply(200, postsDatabase);
};
