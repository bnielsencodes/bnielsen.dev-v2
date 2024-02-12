"use client";
import Header from "@/app/_components/blog/posts/header/Header";
import TermsList from "./_components/TermsList";
import TableOfContents from "./_components/TableOfContents";

export default function WebRelatedTerms() {
  const { name, slug } = {
    name: "Web Development",
    slug: "web-development",
  };

  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      <Header {...{ name, slug }} />
      <div className="flex w-full gap-4 pt-[56px] px-4 pb-4 mx-auto md:max-w-[704px] md:px-0 xl:max-w-[1100px] xl:px-8">
        <TermsList />
        <TableOfContents />
      </div>
    </main>
  );
}
