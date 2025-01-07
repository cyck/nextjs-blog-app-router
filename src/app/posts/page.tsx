import { PostsList } from './_views/posts-list';
import { TagsList } from './_views/tags-list';
import { PostsApi } from './Posts.api';
import { TagsApi } from './Tags.api';

export default async function Posts() {
  const posts = await PostsApi.getPosts();
  const tags = await TagsApi.getTags();

  return (
    <div className='grid grid-cols-6'>
      <aside className='col-span-1'>
        <TagsList tags={tags} />
      </aside>
      <main className='p-3 col-span-5'>
        <section className='flex flex-col gap-2'>
          <PostsList posts={posts} />
        </section>
      </main>
    </div>
  );
}
