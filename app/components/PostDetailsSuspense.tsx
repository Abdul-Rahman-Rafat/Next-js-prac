import { resolve } from "path/win32";

type Props = {
  params: Promise<{ post: string }>;
};

// promise timeout

export default async function PostDetailsSuspense({ post }: { post: string }) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000),
  );
  //   const { post } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${post}`, {
    cache: "force-cache", // SSG
    //  cache:"no-cache" // SSR
  });

  const data = await response.json();

  return (
    <>
      {/* <h1 className="text-2xl font-bold w-4/5 m-auto flex items-center justify-center ">
        post details
      </h1> */}
      <div className="w-4/5 m-auto flex flex-col items-center justify-center gap-4 mt-10 border-2 border-gray-300 rounded p-4">
        <h2 className="text-xl font-semibold border-2 border-blue-300 rounded p-2 mb-2 text-center">
          {data.title}
        </h2>
        <p className="text-lg text-gray-700">{data.body}</p>
      </div>
    </>
  );
}
