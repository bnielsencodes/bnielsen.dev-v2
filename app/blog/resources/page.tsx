"use client";
import NavBar from "@/app/_components/blog/navigation/NavBar";
import Footer from "@/app/_components/blog/footer/Footer";

export default function Resources() {
  return (
    <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
      <NavBar />

      {/* 
        can remove min-h-screen below once there
        are posts in this category
      */}
      <div className="min-h-screen pt-[192px] pb-[100px] lg:max-w-[1100px] lg:mx-auto">
        <p className="px-4 mt-[200px] font-sans text-4xl text-center">
          Content coming soon!
        </p>
      </div>

      <Footer />
    </main>
  );
}
