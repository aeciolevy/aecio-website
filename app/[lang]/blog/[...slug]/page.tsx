import { allPosts, Post } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { Header } from "../../components/layout/Header";
import { getDictionary } from "../../dictionaries";
import { Language } from "@/app/types/language";

type BlogSlugProps = {
  params: { id: string, slug: string, lang: Language }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((post: Post) => params.slug.includes(post._meta.path));
  if (!post) { return };
  return { title: post.title }
}

export default async function PostLayout({ params }: BlogSlugProps) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const post = allPosts.find((post: Post) => params.slug.includes(post._meta.path));

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Header
        dictionary={dictionary}
        lang={lang}
      />

      <article className="py-8 mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h1>{post.title}</h1>
        </div>
        <MDXContent code={post.mdx} />
      </article>
    </main >
  )
}


