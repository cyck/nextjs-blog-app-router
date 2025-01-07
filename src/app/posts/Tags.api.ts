import { API_BASE_URL } from '../globals';
import { Tag } from './Tags.types';

export const TagsApi = {
  async getTags(): Promise<Tag[]> {
    const response = await fetch(`${API_BASE_URL}/tags`);
    return response.json();
  },
};
