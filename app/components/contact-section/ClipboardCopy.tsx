import { useState } from "react";
import clsx from "clsx";

export default function ClipboardCopy({ darkMode }: { darkMode: boolean }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard("brandon@bnielsen.dev")
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        className={clsx("p-0 border-0 hover:cursor-pointer hover:opacity-80 focus:outline-2 focus:opacity-80", { 
            "text-accent-200 focus:outline-accent-200": darkMode,
            "text-accent-100 focus:outline-accent-100": !darkMode
        })}
        onClick={handleCopyClick}
        title="Copy to clipboard"
      >
        <strong>
          brandon@bnielsen.dev
        </strong>
      </button>
      
      <span className="absolute -top-[10px] -right-[70px] p-[0.5rem] rounded-[0.2rem] ml-4 bg-none text-[13px] tracking-[0.4px] uppercase">
        {isCopied ? "Copied!" : ""}
      </span>
    </>
  );
}
