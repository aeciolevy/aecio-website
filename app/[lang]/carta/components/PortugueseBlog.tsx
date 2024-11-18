import { allLetters, Letter, } from "content-collections";
import Link from "next/link";
import { BlogCard } from "@/app/[lang]/components/blog/BlogCard";
import { sortDescending } from "@/app/lib/parseDate";

export const PortugueseBlog = () => {
  const publishedAndSortedLetters = allLetters
    .filter((letter: Letter) => letter.published)
    .sort(sortDescending);

  return (
    <div className="w-full h-full p-12">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {publishedAndSortedLetters.map((letter: Letter) => (
          <Link href={`/carta/${letter._meta.path}`} key={letter._meta.path}>
            <BlogCard
              title={letter.title}
              summary={letter.summary}
              thumbnail={letter.thumbnail}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
