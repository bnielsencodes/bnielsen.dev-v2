// is next line needed?
"use client";
import NavBar from "@/app/_components/blog/navigation/NavBar";
import Header from "@/app/_components/blog/posts/header/Header";
import TermsList from "./_components/web-related-terms/TermsList";
import TableOfContents from "./_components/web-related-terms/TableOfContents";
import Footer from "@/app/_components/blog/footer/Footer";

export default function WebRelatedTerms() {
  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar />
      <Header />
      <div className="flex w-full gap-4 pt-[56px] px-4 pb-4 mx-auto md:max-w-[686px] md:px-0 xl:max-w-[1100px] xl:px-8">
        <TermsList />
        <TableOfContents />
      </div>
      <Footer />
    </main>
  );
}
