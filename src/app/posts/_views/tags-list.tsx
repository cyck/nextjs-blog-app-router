import { PostTagButton } from '../_components/post-tag-button';
import { Tag } from '../Tags.types';

interface Props {
  tags: Tag[];
}
export function TagsList({ tags }: Props) {
  return (
    <>
      {tags.map((tag) => (
        <PostTagButton
          key={tag.id}
          tag={tag.name}
        />
      ))}
    </>
  );
}
