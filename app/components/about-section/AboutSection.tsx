import Image from "next/image";
import illustration from "/public/assets/undraw_progressive_app_m-9-ms.svg";
import Skills from "./skills/Skills";
import clsx from "clsx";

export default function AboutSection(props: any) {
  return (
    <section
      id="about-section"
      className={clsx("pt-20 pb-14 overflow-x-clip", {
        "bg-neutral-200": props.darkMode,
        "bg-neutral-500": !props.darkMode,
      })}
    >
      {/* section heading */}
      <p
        className={clsx(
          "relative z-0 w-[145px] mx-auto text-[2.5rem] font-bold text-center after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[102px] after:h-[14px]",
          {
            "text-neutral-500 after:bg-neutral-300": props.darkMode,
            "text-neutral-200 after:bg-neutral-400": !props.darkMode,
          }
        )}
      >
        About
      </p>
      {/* bio */}
      <div className="flex flex-col gap-16 mb-20">
        <p className="w-[375px] px-[28px] mt-16 text-neutral-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Image
          className="w-64 h-auto mx-auto"
          src={illustration}
          alt="letter N logo"
          width="1140"
          height="655"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col justify-center pb-[25px] mt-[50px] text-[0.9rem] ">
        <Skills darkMode={props.darkMode} />
      </div>
    </section>
  );
}
