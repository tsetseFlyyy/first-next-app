import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    return response.json();
  } catch (error) {
    console.warn(error);
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  console.log(post)
  return (
    <div>
      <h1>Post page {id}</h1>
      <br />
      <p>{post.title}</p>
      <br />
      <p>{post.body}</p>
    </div>
  );
}
