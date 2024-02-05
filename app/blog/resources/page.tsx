"use client";
import NavBar from "@/app/_components/blog/navigation/NavBar";
import YTSection from "./_components/youtube/YTSection";
import BlogsSection from "./_components/blogs/BlogsSection";
import NewslettersSection from "./_components/newsletters/NewslettersSection";
import LearningPlatformsSection from "./_components/learning-platforms/LearningPlatformsSection";
import DesignInspirationSection from "./_components/design-inspiration/DesignInspirationSection";
import ToolsSection from "./_components/tools/ToolsSection";
import TableOfContents from "./_components/TableOfContents";
import Footer from "@/app/_components/blog/footer/Footer";

export default function Resources() {
  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      <NavBar />

      <div className="min-h-screen pt-[130px] px-4 pb-[160px] md:px-8 lg:px-8 lg:mx-auto xl:max-w-[1100px]">
        {/* heading */}
        <h1 className="mt-[100px] mb-3 text-neutral-100 dark:text-neutral-600 font-monk text-5xl font-bold">
          Resources
        </h1>

        {/* subheading */}
        <h2 className="text-neutral-200 dark:text-neutral-500 font-sans text-xl">
          A curated list of resources to help unlock your greatest potential as
          a web developer
        </h2>

        <div className="flex justify-between w-full mt-40 mx-auto xl:max-w-[1100px]">
          <div className="flex flex-col gap-40 w-full">
            <YTSection />
            <BlogsSection />
            <NewslettersSection />
            <LearningPlatformsSection />
            <DesignInspirationSection />
            <ToolsSection />
          </div>
          <TableOfContents />
        </div>
      </div>

      <Footer />
    </main>
  );
}
