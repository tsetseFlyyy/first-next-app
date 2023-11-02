import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 60,
      },
    });

    return response.json();
  } catch (error) {
    console.warn(error);
  }
}

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>
      <ol>
        {posts.map((post: any) => (
          <>
            <br />
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          </>
        ))}
      </ol>
    </>
  );
}
