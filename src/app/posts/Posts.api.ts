import { Post, PostListItem } from './Posts.types';

export const BASE_URL = 'https://dev.to/api';

export const PostsApi = {
  async getPosts(): Promise<PostListItem[]> {
    const data = await fetch(`${BASE_URL}/articles`);
    return data.json();
  },
  async getPostByPath(path: string): Promise<Post> {
    const data = await fetch(`${BASE_URL}/articles/${path}`);
    return await data.json();
  },
};
