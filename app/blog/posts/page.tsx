"use client";
import { postsData } from "@/app/_data/blog/posts/postsData";
import CategoryHeading from "@/app/_components/blog/posts/CategoryHeading";
import PostTile from "@/app/_components/blog/posts/PostTile";

export default function Posts() {
  // create category group elements
  const categories = postsData.categories.map((category) => {
    // if category has posts, then show category group (category heading and posts)
    if (category.posts.length > 0) {
      return (
        <div className="pb-[68px]" key={category.id}>
          <CategoryHeading
            title={category.title}
            length={category.posts.length}
          />
          <ul className="flex flex-col gap-8 px-4 mt-5 text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] md:px-8 lg:grid lg:grid-cols-2 xl:px-0">
            {category.posts.map((post) => {
              return <PostTile key={post.id} {...{ post }} />;
            })}
          </ul>
        </div>
      );
    }
    return null;
  });

  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      <div className="pt-[192px] pb-[160px] lg:max-w-[1100px] lg:mx-auto">
        {categories}
      </div>
    </main>
  );
}
