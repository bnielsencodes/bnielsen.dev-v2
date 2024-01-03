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
      <div className="global relative w-screen h-screen bg-neutral-100 text-neutral-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full text-2xl font-extrabold">
          <h1 className="text-7xl">404</h1>
          <h2 className="mt-4 mb-6 text-4xl">Page Not Found</h2>
          {/* button container */}
          <div className="relative">
            {/* default button */}
            <button className="btn btn-primary btn-light">
              <Link className="text-neutral-200" href="/">
                Return Home
              </Link>
            </button>

            {/* hover button */}
            <button className="btn btn-primary btn-light-alt absolute top-0 left-0">
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
      <div className="global relative w-screen h-screen bg-neutral-600 text-neutral-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full text-2xl font-extrabold">
          <h1 className="text-7xl">404</h1>
          <h2 className="mt-4 mb-6 text-4xl">Page Not Found</h2>
          {/* button container */}
          <div className="relative">
            {/* default button */}
            <button className="btn btn-primary btn-dark">
              <Link className="text-neutral-500" href="/">
                Return Home
              </Link>
            </button>

            {/* hover button */}
            <button className="btn btn-primary btn-dark-alt absolute top-0 left-0">
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
