import Link from 'next/link';
import { PostsApi } from './Posts.api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PostTagButton } from './components/post-tag-button';

export default async function Posts() {
  const posts = await PostsApi.getPosts({ params: { tag: 'nextjs' } });

  return (
    <main className='p-3'>
      <section className='flex flex-col gap-2'>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.path}`}
          >
            <Card>
              <CardHeader>
                <div
                  className='flex items-center gap-2
                '
                >
                  <Avatar>
                    <AvatarImage
                      src={post.user.profile_image}
                      alt={post.user.name}
                    />
                    <AvatarFallback>{post.user.name.at(0)}</AvatarFallback>
                  </Avatar>
                  <p>{post.user.name}</p>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>{post.title}</CardTitle>
                {post.tag_list.map((tag) => (
                  <PostTagButton
                    key={tag}
                    tag={tag}
                  />
                ))}
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
