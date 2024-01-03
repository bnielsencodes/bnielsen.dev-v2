import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoDark from "/public/assets/icons/logo/Main-Logo-800x600.png";
import logoLight from "/public/assets/icons/logo/Inverted-Color-800x600.png";

export default function ThemedLogo() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 mr-2 rounded-lg bg-neutral-400 animate-pulse"></div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Image
        className="w-8 h-8 mr-2"
        src={logoDark}
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
        className="w-8 h-8 mr-2"
        src={logoLight}
        alt="black letter N logo"
        width="800"
        height="600"
        sizes="100vw"
      />
    );
  }
}
