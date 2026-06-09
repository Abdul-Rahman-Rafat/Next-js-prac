import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Page",
};
export default function newPage() {
  return (
    <>
      <h1> new Page</h1>
    </>
  );
}
