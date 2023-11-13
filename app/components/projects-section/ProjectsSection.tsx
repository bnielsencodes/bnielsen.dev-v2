import clsx from "clsx";

export default function ProjectsSection(props: any) {
  return (
    <section
      className={clsx("overflow-x-clip", {
        "bg-neutral-100": props.darkMode,
        "bg-neutral-600": !props.darkMode,
      })}
    >
      <p
        className={clsx(
          "relative z-0 w-[190px] pt-[70px] mx-auto mb-[10px] text-[2.5rem] font-bold text-center after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[145px] after:h-[14px]",
          {
            "text-neutral-500 after:bg-neutral-300": props.darkMode,
            "text-neutral-200 after:bg-neutral-400": !props.darkMode,
          }
        )}
      >
        Portfolio
      </p>
      <div
        className="flex flex-col justify-center pb-[25px] mt-[50px] text-[0.9rem] "
      ></div>
    </section>
  );
}
