export default function CategoryHeading(props: any) {
  return (
    <div className="flex items-end justify-between px-12 md:px-16 xl:pl-8 xl:pr-16">
      <h1 className="text-neutral-200 dark:text-neutral-500 text-[40px] leading-[42px] font-extrabold">
        {props.title}
      </h1>
      <p className="hidden text-neutral-200 dark:text-neutral-500 font-sans text-lg font-medium md:block">
        {props.length} {props.length === 1 ? "Article" : "Articles"}
      </p>
    </div>
  );
}
