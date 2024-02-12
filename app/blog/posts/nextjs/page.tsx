"use client";
import { categoryData as posts } from "@/app/_data/blog/posts/categories/nextjs/categoryData";
import CategoryHeading from "@/app/_components/blog/posts/CategoryHeading";
import PostTile from "@/app/_components/blog/posts/PostTile";

export default function NextJS() {
  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      {/* 
        can remove min-h-screen below once there
        are posts in this category
      */}
      <div className="min-h-screen pt-[192px] pb-[100px] lg:max-w-[1100px] lg:mx-auto">
        <CategoryHeading title="Next.js" length={posts.length} />

        {posts.length >= 1 && (
          <ul className="flex flex-col gap-8 px-4 mt-5 mb-[128px] text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] md:px-8 lg:grid lg:grid-cols-2 xl:px-0">
            {posts.map((post) => {
              return <PostTile key={post.id} {...{ post }} />;
            })}
          </ul>
        )}

        {/* 
          can update to remove this code once there are posts
          in this category
        */}
        {posts.length < 1 && (
          <p className="px-4 mt-[200px] font-sans text-2xl text-center">
            There are no posts yet for this category.
          </p>
        )}
      </div>
    </main>
  );
}
