"use client";
import { categoryData } from "@/app/_data/blog/posts/categories/nextjs/categoryData";
import NavBar from "../../../_components/blog/navigation/NavBar";
import CategoryHeading from "@/app/_components/blog/posts/CategoryHeading";
import PostTile from "@/app/_components/blog/posts/PostTile";
import Footer from "../../../_components/blog/footer/Footer";

export default function NextJS() {
  const posts = categoryData.map((post) => {
    return <PostTile key={post.id} {...{ post }} />;
  });

  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar />
      {/* 
        can remove min-h-screen below once there
        are posts in this category
      */}
      <div className="min-h-screen pt-[192px] pb-[100px] lg:max-w-[1100px] lg:mx-auto">
        <CategoryHeading title="Next.js" length={categoryData.length} />
        {categoryData.length >= 1 && (
          <ul className="flex flex-col gap-8 px-4 mt-5 mb-[128px] text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] md:px-8 lg:grid lg:grid-cols-2 xl:px-0">
            {posts}
          </ul>
        )}
        {/* 
          can update to remove this code once there are posts
          in this category
        */}
        {categoryData.length < 1 && (
          <p className="px-4 mt-[200px] font-sans text-2xl text-center">
            There are no posts yet for this category.
          </p>
        )}
      </div>
      <Footer />
    </main>
  );
}
