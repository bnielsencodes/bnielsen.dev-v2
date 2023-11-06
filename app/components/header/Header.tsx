import clsx from "clsx";

export default function Header(props: any) {
  return (
    // this is a comment
    <header className={clsx("flex flex-col items-center justify-center h-[calc(100vh-56px)]", { "bg-neutral-100": props.darkMode, "bg-neutral-500": !props.darkMode })}>
      <div className="hero-img"></div>
      <h1 className={clsx("mt-3 mb-[6px] font-mono text-3xl", { "text-neutral-500": props.darkMode, "text-neutral-100": !props.darkMode })}>Brandon Nielsen</h1>
      <h2 className={clsx("text-lg", { "text-neutral-400": props.darkMode, "text-neutral-200": !props.darkMode })}>Web Developer</h2>
      <div className="flex gap-4 mt-[15px]">
        <button className="py-[10px] px-[20px] border border-color-neutral-500 rounded-lg bg-neutral-500 text-neutral-100 font-semibold">View Work</button>
        <button className="py-[10px] px-[20px] border border-color-neutral-200 rounded-lg font-semibold">Contact</button>
      </div>
    </header>
  );
}
