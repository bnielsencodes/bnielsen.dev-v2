export default function Header() {
  return (
    <header
      id="header"
      className="flex items-center h-screen pt-[56px] px-5 bg-neutral-500 dark:bg-neutral-200 md:px-8 lg:px-0"
    >
      <div className="flex flex-col justify-center w-full max-w-[1100px] mx-auto lg:items-center">
        <h1 className="mt-8 mb-[0.7rem] text-neutral-100 dark:text-neutral-600 text-[13vw] leading-[1.2] font-extrabold text-center md:mb-6 lg:text-8xl lg:leading-[1.15]">
          A blog for web developers,
        </h1>
        <p className="text-neutral-200 dark:text-neutral-500 font-sans text-[20px] font-medium leading-[2rem] tracking-wide text-center md:text-[32px] md:leading-[1.35em] lg:text-3xl">
          by Brandon Nielsen.
        </p>
      </div>
    </header>
  );
}
