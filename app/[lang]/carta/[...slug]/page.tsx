import React from "react";
import { allLetters, Letter } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { Header } from "../../components/layout/Header";
import { getDictionary } from "../../dictionaries";
import { Language } from "@/app/types/language";
import { Table, TableCell, TableHead, TableRow } from "../../components/mdx/Table";

type Props = {
  params: { id: string, lang: Language, slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const customComponents = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl font-bold my-6 text-gray-900" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-3xl font-semibold my-5 text-gray-800" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-lg leading-relaxed my-4 text-gray-700" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc list-inside my-4 text-gray-700" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="my-2 text-gray-700" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4"
      {...props}
    />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-gray-100 text-sm p-1 rounded text-red-600 font-mono"
      {...props}
    />
  ),
  table: Table,
  thead: TableHead,
  tr: TableRow,
  th: (props: any) => <TableCell header {...props} />,
  td: (props: any) => <TableCell {...props} />,
};

export const generateMetadata = ({ params }: Props) => {
  const letters = allLetters.find((post: Letter) => params.slug.includes(post._meta.path));
  if (!letters) { return };
  return { title: letters.title }
}

export default async function PostLayout({ params }: Props) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const letter = allLetters.find((post: Letter) => params.slug.includes(post._meta.path));

  if (!letter) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Header dictionary={dictionary} lang={lang} />
      <main className="bg-white text-black mx-auto max-w-3xl px-6 py-8">
        <article className="prose lg:prose-xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold my-6 text-gray-900 text-left">{letter.title}</h1>
          </div>
          <MDXContent code={letter.mdx} components={customComponents} />
        </article>
      </main >
    </div>
  )
}


