import Link from 'next/link';
import { PostsApi } from './Posts.api';

export default async function Posts() {
  const posts = await PostsApi.getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <li>{post.title}</li>
          <Link href={`/posts/${post.path}`}>Open</Link>
        </div>
      ))}
    </ul>
  );
}
