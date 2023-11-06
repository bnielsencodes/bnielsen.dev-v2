import clsx from "clsx";

export default function Header(props: any) {
  return (
    // this is a comment
    <header className={clsx("h-screen", { "bg-neutral-100": props.darkMode, "bg-neutral-500": !props.darkMode })}>
    </header>
  );
}
