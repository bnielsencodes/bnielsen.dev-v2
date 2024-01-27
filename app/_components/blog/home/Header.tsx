export default function Header() {
  return (
    <header
      id="header"
      className="flex items-center h-screen pt-[56px] px-5 bg-neutral-500 dark:bg-neutral-200 md:px-8 lg:px-0"
    >
      <div className="flex flex-col items-start justify-center w-full max-w-[1100px] mx-auto lg:items-center">
        <h1 className="mt-14 mb-5 text-neutral-100 dark:text-neutral-600 text-[58px] leading-[4.25rem] font-extrabold text-left md:text-7xl lg:text-8xl lg:leading-[1.15] lg:text-center">
          A blog for web developers,
        </h1>
        <p className="mb-6 text-neutral-200 dark:text-neutral-500 font-sans text-[24px] font-medium leading-[2rem] tracking-wide text-left md:text-[32px] md:leading-[1.35em] lg:text-3xl lg:text-center">
          by Brandon Nielsen.
        </p>
      </div>
    </header>
  );
}
