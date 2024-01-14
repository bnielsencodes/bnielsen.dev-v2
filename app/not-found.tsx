"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="global relative h-screen w-screen bg-neutral-100 text-neutral-500">
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-2xl font-extrabold">
          <h1 className="text-7xl">404</h1>
          <h2 className="mb-6 mt-4 text-4xl">Page Not Found</h2>
          {/* button container */}
          <div className="relative">
            {/* default button */}
            <button className="btn btn-primary btn-light">
              <Link className="text-neutral-200" href="/">
                Return Home
              </Link>
            </button>

            {/* hover button */}
            <button className="btn btn-primary btn-light-alt absolute left-0 top-0">
              <Link
                className="text-neutral-200"
                href="/"
                tabIndex={-1}
                aria-hidden={true}
              >
                Return Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="global relative h-screen w-screen bg-neutral-600 text-neutral-200">
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-2xl font-extrabold">
          <h1 className="text-7xl">404</h1>
          <h2 className="mb-6 mt-4 text-4xl">Page Not Found</h2>
          {/* button container */}
          <div className="relative">
            {/* default button */}
            <button className="btn btn-primary btn-dark">
              <Link className="text-neutral-500" href="/">
                Return Home
              </Link>
            </button>

            {/* hover button */}
            <button className="btn btn-primary btn-dark-alt absolute left-0 top-0">
              <Link
                className="text-neutral-500"
                href="/"
                tabIndex={-1}
                aria-hidden={true}
              >
                Return Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
