import Link from "next/link";
import { allPosts } from "content-collections";
import { sortDescending } from "@/app/lib/parseDate";

export function BlogEN(): JSX.Element {
  const sortedByLastModified = allPosts
    .sort(sortDescending)
    .filter((post) => post.published);
  return (
    <div className="w-full pt-4">
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-medium text-white text-center tracking-[0.36px] leading-[normal]">
          List of the latest letters
        </h1>
        <p className="p-4 text-[#858a96] text-lg text-center tracking-[0.22px] leading-[normal]">
          Exploring individual potential, remote businesses, and enjoying life.
        </p>
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:justify-items-center items-center gap-4 lg:gap-8 px-2">
          {sortedByLastModified.map((post) => (
            <div key={post._meta.path} className="bg-blue-1050 rounded">
              <Link href={`/blog/${post._meta.path}`}>
                <img
                  className="aspect-video rounded object-fit"
                  alt="Unsplash bas"
                  src={post.thumbnail}
                />
                <div className="mt-4 inline-flex flex-col gap-4 items-start">
                  <p className="relative w-[288px] mt-[-1.00px] font-medium text-white text-[18px] tracking-[0.18px] leading-[normal]">
                    {post.title}
                  </p>
                  <p className="relative w-[295px] font-normal text-[#757985] text-[14px] tracking-[0.14px] leading-[normal]">
                    {post.summary}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row justify-center mt-4">
          <Link href="/blog">
            <button className="px-8 py-4 w-fit font-normal hover:text-primary-500 text-white tracking-[0] leading-[normal] rounded overflow-hidden border border-solid hover:border-primary-500 border-white">
              Read Blog Content
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
