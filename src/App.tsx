import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./common/components/header/header.component";
import { PostEntrypoint } from "./post/infra/post.entrypoint";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <PostEntrypoint />
    </BrowserRouter>
  );
};
