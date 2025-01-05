export interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
  path: string;
  comments_count: number;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  tag_list: string[];
  reading_time_minutes: number;
  user: User;
  created_at: string;
  edited_at: string;
  published_at: string;
  body_html: string;
  body_markdown: string;
}

export type PostListItem = Omit<Post, 'body_html' | 'body_markdown'>;

export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string | null;
  profile_image: string;
}
