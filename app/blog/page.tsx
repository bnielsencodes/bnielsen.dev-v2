"use client";
import NavBar from "../_components/shared/navigation/NavBar";
import Footer from "../_components/shared/footer/Footer";

export default function Blog() {
  const blog = true;
  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar {...{ blog }} />
      <Footer {...{ blog }} />
    </main>
  );
}
