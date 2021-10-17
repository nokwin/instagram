import React from "react";
import { Header } from "./common/components/header/header.component";
import { PostList } from "./post/components/post-list/post-list.component";

export const App = () => {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
};
