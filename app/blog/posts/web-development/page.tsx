"use client";
import { categoryData as posts } from "@/app/_data/blog/posts/categories/web-development/categoryData";
import NavBar from "../../../_components/blog/navigation/NavBar";
import CategoryHeading from "@/app/_components/blog/posts/CategoryHeading";
import PostTile from "@/app/_components/blog/posts/PostTile";
import Footer from "../../../_components/blog/footer/Footer";

export default function WebDevelopment() {
  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      <NavBar />
      <div className="pt-[192px] pb-[100px] lg:max-w-[1100px] lg:mx-auto">
        <CategoryHeading title="Web Development" length={posts.length} />

        <ul className="flex flex-col gap-8 px-4 mt-5 mb-[128px] text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] md:px-8 lg:grid lg:grid-cols-2 xl:px-0">
          {posts.map((post) => {
            return <PostTile key={post.id} {...{ post }} />;
          })}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
