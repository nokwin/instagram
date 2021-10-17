import MockAdapter from "axios-mock-adapter";
import { postApiMock } from "../post/infra/post-api-mock";
import { api } from "./api";

const mock = new MockAdapter(api);

postApiMock(mock);
