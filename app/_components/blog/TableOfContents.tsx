import { useEffect, useState } from "react";
import { post } from "@/app/termsPostData";

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <aside className="hidden xl:block lg:w-full lg:max-w-[250px] lg:pt-[2px] lg:ml-auto lg:text-neutral-200 lg:text-[17px] lg:font-bold lg:tracking-wider">
      <p className="text-neutral-200 uppercase dark:text-neutral-500">
        Table of Contents
      </p>

      <ul className="flex flex-col gap-[6px] h-[800px] mt-4 text-neutral-300 font-sans text-[14.5px] overflow-scroll dark:text-neutral-400">
        <li>
          <a className="hover:opacity-80" href="#redirect">
            304 Redirect
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#ally">
            A11y
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#abstraction">
            Abstraction
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#accessibility">
            Accessibility
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#accordian">
            Accordian
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#agile">
            Agile Methodology
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
        <li>
          <a className="hover:opacity-80" href="#algorithm">
            Algorithm
          </a>
        </li>
      </ul>
    </aside>
  );
}
