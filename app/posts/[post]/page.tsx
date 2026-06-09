import PostDetailsSuspense from "@/app/components/PostDetailsSuspense";
import { resolve } from "path/win32";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  params: Promise<{ post: string }>;
};

// promise timeout

export default async function PostPage({ params }: Props) {
  const { post } = await params;
  // const Div = <div>Loading...</div>;
  return (
    <>
      {/* post details will appear even if loading */}
      <h1 className="text-2xl font-bold text-center mb-4">Post Details</h1>

      <Suspense fallback={<Loading />}>
        <PostDetailsSuspense post={post} />
      </Suspense>
    </>
  );
}
