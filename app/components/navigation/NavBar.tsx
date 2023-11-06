import Image from "next/image";
import darkLogo from "/public/assets/Main-Logo-800x600.png";
import lightLogo from "/public/assets/Inverted-Color-800x600.png";

export default function NavBar(props: any) {
  return (
    <nav className="z-10 flex items-center justify-between h-14 pl-4 pr-2 border-b border-neutral-300">
      {/* logo and name */}
      <div className="flex">
        <Image
          className="w-8 h-8 mr-2"
          src={props.darkMode ? darkLogo : lightLogo}
          alt="letter N logo"
          width="800"
          height="600"
          sizes="100vw"
        />
        <p className="mt-1 text-neutral-500 font-bold">Brandon Nielsen</p>
      </div>
    </nav>
  );
}
