import { Post, allPosts } from "content-collections";
import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { sortDescending } from "@/app/lib/parseDate";

export const EnglishBlog = () => {
  const publishedAndSortedPosts = allPosts.filter((post: Post) => post.published).sort(sortDescending);

  console.log('### allPosts', allPosts)
  return (
    <div className="w-full h-full p-12">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {publishedAndSortedPosts.map((post: Post) => (
          <Link href={`/blog/${post._meta.path}`} key={post._meta.path}>
            <BlogCard title={post.title} summary={post.summary} thumbnail={post.thumbnail} />
          </Link>
        ))}
      </div>
    </div>
  );
}

