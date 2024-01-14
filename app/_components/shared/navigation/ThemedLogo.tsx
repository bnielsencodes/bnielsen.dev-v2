import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoWhite from "/public/assets/icons/logo/logo-white-800x600.png";
import logoBlack from "/public/assets/icons/logo/logo-black-800x600.png";

export default function ThemedLogo() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="mr-2 h-8 w-8 animate-pulse rounded-lg bg-neutral-400"></div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Image
        className="mr-2 h-8 w-8"
        src={logoWhite}
        alt="white letter N logo"
        width="800"
        height="600"
        sizes="100vw"
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Image
        className="mr-2 h-8 w-8"
        src={logoBlack}
        alt="black letter N logo"
        width="800"
        height="600"
        sizes="100vw"
      />
    );
  }
}
