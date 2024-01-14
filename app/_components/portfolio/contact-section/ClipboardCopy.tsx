import { useState } from "react";

export default function ClipboardCopy() {
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
        className="opacity-transition outline-light-theme dark:outline-dark-theme rounded-sm border-0 p-0 text-accent-100 focus:opacity-90 dark:text-accent-200 lg:hover:cursor-pointer lg:hover:opacity-90"
        onClick={handleCopyClick}
        title="Copy to clipboard"
      >
        <strong>brandon@bnielsen.dev</strong>
      </button>

      <span className="absolute -right-[70px] -top-[10px] ml-4 rounded-[0.2rem] bg-none p-[0.5rem] text-[0.813rem] uppercase tracking-[0.4px]">
        {isCopied ? "Copied!" : ""}
      </span>
    </>
  );
}
