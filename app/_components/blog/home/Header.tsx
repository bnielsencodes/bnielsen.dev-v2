import Avatar from "../../shared/Avatar";

export default function Header() {
  const parent = "blog";

  return (
    <header
      id="header"
      className="flex h-screen items-center bg-neutral-500 px-5 pt-[56px] dark:bg-neutral-200 md:px-8 lg:px-0"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start justify-center lg:px-8">
        <Avatar {...{ parent }} />

        {/* post title */}
        <h1 className="mb-5 mt-7 text-left text-[38px] font-bold leading-[2.5rem] text-neutral-100 dark:text-neutral-600 md:text-[32px] md:leading-[1.35em] lg:text-6xl">
          A blog for web developers,
        </h1>
        <p className="mb-6 text-left font-sans text-[24px] font-medium leading-[2rem] tracking-wide text-neutral-100 dark:text-neutral-600 md:text-[32px] md:leading-[1.35em] lg:text-3xl">
          by Brandon Nielsen.
        </p>

        <p className="font-sans text-[20px] leading-[34px] text-neutral-300 dark:text-neutral-400">
          I like to write about React, Next.js, JavaScript, CSS, Tailwind and
          web development in general.
        </p>
      </div>
    </header>
  );
}
