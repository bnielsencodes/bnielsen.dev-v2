"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function NotFound() {
  const [darkMode, setDarkMode] = useState(false);

  // prefers dark mode
  // useEffect(() => {
  //   const prefersDark = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   if (prefersDark) {
  //     setDarkMode(true);
  //   }
  // }, []);

  return (
    <div
      className={clsx("global relative w-screen h-screen", {
        "bg-neutral-100 text-neutral-500": darkMode,
        "bg-neutral-600 text-neutral-200": !darkMode,
      })}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full text-2xl font-extrabold">
        <h1 className="text-7xl">404</h1>
        <h2 className="mt-4 mb-6 text-4xl">Page Not Found</h2>
        <button
          className={clsx("btn btn-primary", {
            "btn-light": darkMode,
            "btn-dark": !darkMode,
          })}
        >
          <Link
            className={clsx("", {
              "text-neutral-200": darkMode,
              "text-neutral-500": !darkMode,
            })}
            href="/">Return Home</Link>
        </button>
      </div>
    </div>
  );
}
