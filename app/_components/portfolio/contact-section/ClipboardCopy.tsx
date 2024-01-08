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
        className="opacity-transition outline-light-theme p-0 border-0 rounded-sm text-accent-100 dark:outline-dark-theme dark:text-accent-200 focus:opacity-90 lg:hover:opacity-90 lg:hover:cursor-pointer"
        onClick={handleCopyClick}
        title="Copy to clipboard"
      >
        <strong>brandon@bnielsen.dev</strong>
      </button>

      <span className="absolute -top-[10px] -right-[70px] p-[0.5rem] rounded-[0.2rem] ml-4 bg-none text-[0.813rem] tracking-[0.4px] uppercase">
        {isCopied ? "Copied!" : ""}
      </span>
    </>
  );
}
