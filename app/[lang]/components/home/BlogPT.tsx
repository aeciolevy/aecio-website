import Link from "next/link";
import { allLetters } from "content-collections";
import { sortDescending } from "@/app/lib/parseDate";
import { BlogCard } from "../blog/BlogCard";

export function BlogPT() {
  const sortedByLastModified = allLetters
    .sort(sortDescending)
    .filter((letter) => letter.published);

  return (
    <div className="w-full p-2 sm:p-4">
      <div className="flex flex-col space-y-6">
        <h1 className="text-5xl font-semibold text-white text-center tracking-[0.36px] leading-[normal]">
          Lista das últimas cartas
        </h1>
        <p className="p-4 text-neutral-400 font-light text-lg text-center leading-[normal]">
          Explorar o potencial individual, negócios remotos e aproveitar a vida.
        </p>
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:justify-items-center items-center gap-4 lg:gap-12">
          {sortedByLastModified.map((letter) => (
            <div key={letter._meta.path} className="rounded">
              <Link href={`/cartas/${letter._meta.path}`}>
                <BlogCard
                  title={letter.title}
                  summary={letter.summary}
                  thumbnail={letter.thumbnail}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row justify-center mt-4">
          <Link
            href="/blog"
            className="px-8 py-4 w-fit font-normal hover:text-primary-500 text-white tracking-[0] leading-[normal] rounded overflow-hidden border border-solid hover:border-primary-500 border-white"
          >
            Ler conteudo do Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
