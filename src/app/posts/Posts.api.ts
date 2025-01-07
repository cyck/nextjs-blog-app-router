import { API_BASE_URL } from '../globals';
import { Post, PostListItem } from './Posts.types';

interface GetRequestPayload<Params extends Record<string, string>> {
  params?: Params;
}

export const PostsApi = {
  async getPosts<Params extends Record<string, string>>({ params }: GetRequestPayload<Params> = {}): Promise<
    PostListItem[]
  > {
    const queryString = new URLSearchParams(params).toString();
    const data = await fetch(`${API_BASE_URL}/articles${queryString ? `?${queryString}` : ''}`);
    return data.json();
  },
  async getPostByPath(path: string): Promise<Post> {
    const data = await fetch(`${API_BASE_URL}/articles/${path}`);
    return await data.json();
  },
};
