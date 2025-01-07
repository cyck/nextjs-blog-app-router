import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { PostTagButton } from '../_components/post-tag-button';
import { PostListItem } from '../Posts.types';

interface Props {
  posts: PostListItem[];
}
export function PostsList({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/path/${post.path}`}
        >
          <Card>
            <CardHeader>
              <div className='flex items-center gap-2'>
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
    </>
  );
}
