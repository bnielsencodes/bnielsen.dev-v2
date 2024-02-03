"use client";
import { resources as resourcesData } from "@/app/_data/blog/resourcesData";
import NavBar from "@/app/_components/blog/navigation/NavBar";
import YoutubeChannel from "./_components/YoutubeChannel";
import Footer from "@/app/_components/blog/footer/Footer";

export default function Resources() {
  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      <NavBar />

      <div className="min-h-screen pt-[130px] px-4 pb-[160px] lg:max-w-[1100px] lg:px-8 lg:mx-auto">
        {/* heading */}
        <h1 className="mt-[200px] mb-3 font-monk text-5xl font-semibold">
          Resources
        </h1>

        {/* subheading */}
        <p className="font-sans text-xl">
          A curated list of resources to help unlock your greatest potential as
          a web developer
        </p>

        {/* content container */}
        <div className="mt-40">
          <p id="youtube" className="mb-12 text-3xl font">
            YouTube Channels
          </p>

          <ul
            className="grid grid-cols-2 gap-x-3 gap-y-16"
            role="list"
            aria-labelledby="youtube"
          >
            {resourcesData.youtube.map((channel) => (
              <YoutubeChannel key={channel.id} {...{ channel }} />
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
