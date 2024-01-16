import Avatar from "../../shared/Avatar";

export default function Header() {
  const parent = "blog";

  return (
    <header
      id="header"
      className="flex items-center h-screen pt-[56px] px-5 bg-neutral-500 dark:bg-neutral-200 md:px-8 lg:px-0"
    >
      <div className="flex flex-col items-start justify-center w-full max-w-[1100px] mx-auto lg:px-8">
        <Avatar {...{ parent }} />

        {/* post title */}
        <h1 className="mt-7 mb-5 text-neutral-100 dark:text-neutral-600 text-[38px] font-bold leading-[2.5rem] text-left md:text-[32px] md:leading-[1.35em] lg:text-6xl">
          A blog for web developers,
        </h1>
        <p className="mb-6 text-neutral-100 dark:text-neutral-600 font-sans text-[24px] font-medium leading-[2rem] tracking-wide text-left md:text-[32px] md:leading-[1.35em] lg:text-3xl">
          by Brandon Nielsen.
        </p>

        <p className="text-neutral-300 dark:text-neutral-400 font-sans text-[20px] leading-[34px]">
          I like to write about React, Next.js, JavaScript, CSS, Tailwind and
          web development in general.
        </p>
      </div>
    </header>
  );
}
