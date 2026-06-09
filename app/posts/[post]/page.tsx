type Props = {
  params: Promise<{ post: string }>;
};

export default async function PostPage({ params }: Props) {
  const { post } = await params;

  return <h1>page {post}</h1>;
}
