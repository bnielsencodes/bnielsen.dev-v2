"use client";
import NavBar from "@/app/_components/blog/navigation/NavBar";
import YTSection from "./_components/youtube/YTSection";
import Footer from "@/app/_components/blog/footer/Footer";

export default function Resources() {
  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      <NavBar />

      <div className="min-h-screen pt-[130px] px-4 pb-[160px] md:px-8 lg:max-w-[1100px] lg:px-8 lg:mx-auto">
        {/* heading */}
        <h1 className="mt-[200px] mb-3 font-monk text-5xl font-bold">
          Resources
        </h1>

        {/* subheading */}
        <p className="text-neutral-500 font-sans text-xl">
          A curated list of resources to help unlock your greatest potential as
          a web developer
        </p>

        <div className="flex justify-between w-full mt-40 mx-auto xl:max-w-[1100px]">
          <YTSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
