import ApiRequest from "../components/ApiRequest";
export default async function postsPage() {
  // الميزة في الssr
  // هنكتب الapi  على طول بدون useEffect

  // 1. جلب البيانات مباشرة باستخدام await داخل المكون [5]
  // نستخدم هنا خيار revalidate لتفعيل تقنية ISR (التحديث الدوري) [9]
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache", // SSG
    //  cache:"no-cache" // SSR
  });

  const post = await response.json();

  return (
    <>
      {" "}
      <h1>posts Page</h1>
      <div>
        <ApiRequest />
      </div>
      <div>
        <h1>server side</h1>
        <h2>post.title</h2>
      </div>
    </>
  );
}
