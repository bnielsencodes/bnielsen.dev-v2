export default function AboutSection(props: any) {
  return (
    <section
      className={clsx("overflow-x-clip", {
        "bg-neutral-200": props.darkMode,
        "bg-neutral-500": !props.darkMode,
      })}
    >
    </section>
  );
}
