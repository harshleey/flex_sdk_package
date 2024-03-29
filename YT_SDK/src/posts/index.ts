import { Base } from "../base";
import { NewPost, Post } from "./types";

const resourceName = "posts";

export class Posts extends Base {
  getPostById(id: number): Promise<Post> {
    // REQUEST will essentially append the data in the parenthesis to the baseUrl.
    return this.request(`/${resourceName}/${id}`);
  }

  getPosts(): Promise<Post[]> {
    return this.request(`/${resourceName}`);
  }

  createPost(newPost: NewPost): Promise<Post> {
    return this.request(`/${resourceName}`, {
      method: "POST",
      body: JSON.stringify(newPost),
    });
  }
}
