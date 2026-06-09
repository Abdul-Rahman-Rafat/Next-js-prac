import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4">
      {/* <h1>Posts</h1> */}
      {children}
    </div>
  );
}
