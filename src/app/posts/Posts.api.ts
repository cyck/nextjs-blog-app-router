import { Post, PostListItem } from './Posts.types';

export const BASE_URL = 'https://dev.to/api';

interface GetRequestPayload {
  params?: Record<string, string>;
}

export const PostsApi = {
  async getPosts({ params }: GetRequestPayload): Promise<PostListItem[]> {
    const queryString = new URLSearchParams(params).toString();
    const data = await fetch(`${BASE_URL}/articles${queryString ? `?${queryString}` : ''}`);
    return data.json();
  },
  async getPostByPath(path: string): Promise<Post> {
    const data = await fetch(`${BASE_URL}/articles/${path}`);
    return await data.json();
  },
};
