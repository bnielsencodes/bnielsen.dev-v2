"use client";
import Header from "../_components/blog/header/PostHeader";
import Content from "../_components/blog/Content";
import TableOfContents from "../_components/blog/TableOfContents";
import NavBar from "../_components/portfolio/navigation/NavBar";
import Footer from "../_components/portfolio/footer/Footer";

export default function Blog() {
  const blog = true;

  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar />
      <Header />
      <div className="flex gap-4 w-full pt-[56px] px-6 pb-4 mx-auto md:max-w-[686px] md:px-0 xl:max-w-[1100px] xl:px-8">
        <Content />
        <TableOfContents />
      </div>
      <Footer />
    </main>
  );
}
