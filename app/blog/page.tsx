"use client";
import NavBar from "../_components/shared/navigation/NavBar";
export default function Blog() {
  const blog = true;
  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar {...{ blog }} />
    </main>
  );
}
