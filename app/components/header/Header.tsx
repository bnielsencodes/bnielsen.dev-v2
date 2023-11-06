import clsx from "clsx";

export default function Header(props: any) {
  return (
    // this is a comment
    <header className={clsx("h-[calc(100vh-56px)]", { "bg-neutral-100": props.darkMode, "bg-neutral-500": !props.darkMode })}>
    </header>
  );
}
