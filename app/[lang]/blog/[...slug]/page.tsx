import { allPosts, Post } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string, slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((post: Post) => params.slug.includes(post._meta.path));
  if (!post) { return };
  return { title: post.title }
}

export default function PostLayout({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => params.slug.includes(post._meta.path));

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="py-8 mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h1>{post.title}</h1>
        </div>
        <MDXContent code={post.mdx} />
      </article>
    </main >
  )
}


