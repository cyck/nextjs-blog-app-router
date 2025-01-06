'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import { Post } from '../Posts.types';

interface Props {
  tag: Post['tag_list'][0];
}

export const PostTagButton = ({ tag }: Props) => {
  const router = useRouter();
  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();
    router.push(`/posts/tag/${tag}`);
  };

  return (
    <Button
      variant='link'
      className='p-1 mr-1'
      onClick={handleClick}
    >
      #{tag}
    </Button>
  );
};
