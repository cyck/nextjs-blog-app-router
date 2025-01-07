import Markdown from 'react-markdown';
import { PostsApi } from '../../Posts.api';

interface Params {
  path: string[];
}

interface Props {
  params: Promise<Params>;
}

export default async function Page({ params }: Props) {
  const { path } = await params;
  const post = await PostsApi.getPostByPath(path.join('/'));

  return (
    <div>
      <h1>{post.title}</h1>
      <Markdown>{post.body_markdown}</Markdown>
    </div>
  );
}
