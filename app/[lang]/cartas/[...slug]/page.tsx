import { allLetters, Letter } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string, slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = ({ params }: Props) => {
  const letters = allLetters.find((post: Letter) => params.slug.includes(post._meta.path));
  if (!letters) { return };
  return { title: letters.title }
}

export default function PostLayout({ params }: { params: { slug: string } }) {
  const letter = allLetters.find((post: Letter) => params.slug.includes(post._meta.path));

  if (!letter) {
    notFound();
  }

  return (
    <main>
      <article className="py-8 mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h1>{letter.title}</h1>
        </div>
        <MDXContent code={letter.mdx} />
      </article>
    </main >
  )
}


