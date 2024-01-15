"use client";
import NavBar from "../../../../_components/blog/navigation/NavBar";
import Header from "../../../../_components/blog/posts/header/Header";
import Footer from "../../../../_components/blog/footer/Footer";

export default function WebRelatedTerms() {
  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar />
      <Header />
      <div className="mx-auto flex w-full gap-4 px-6 pb-4 pt-[56px] md:max-w-[686px] md:px-0 xl:max-w-[1100px] xl:px-8">
      </div>
      <Footer />
    </main>
  );
}
