import ApiRequest from "../components/ApiRequest";
import Link from "next/link";
export default async function postsPage() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache", // SSG
    //  cache:"no-cache" // SSR
  });
  const data = await response.json();
  return (
    <>
      {" "}
      <h1 className="text-2xl font-bold w-4/5 m-auto flex items-center justify-center ">
        posts Page
      </h1>
      <div>{/* <ApiRequest /> */}</div>
      <div className="w-4/5 m-auto flex flex-col items-center justify-center gap-4 mt-10 border-2 border-gray-300 rounded p-4">
        {/* <h1>server side</h1> */}
        {data.posts.map((post: any) => (
          <div
            key={post.id}
            className="w-full border-2 border-gray-300 rounded p-4"
          >
            <h2 className="text-xl font-semibold border-2 border-blue-300 rounded p-2 mb-2 text-center">
              {post.title}
            </h2>
            <div className="flex items-center justify-center">
              <Link href={`/posts/${post.id}`}>
                <button className="p-2 rounded bg-blue-300 ">
                  {" "}
                  show details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
