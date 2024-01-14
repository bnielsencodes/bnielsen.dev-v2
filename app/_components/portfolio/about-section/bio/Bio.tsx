import Avatar from "../../../shared/Avatar";

export default function Bio() {
  return (
    <div className="mx-auto mb-24 flex flex-col items-center gap-8 md:mb-16 md:w-[720px] md:gap-12 lg:mx-auto lg:mb-32 lg:w-[735px] lg:flex-row-reverse lg:gap-10 xl:mx-0 xl:mb-0 xl:w-[605px] xl:flex-col">
      <Avatar parent="bio" />

      <div className="mt-4 font-sans font-light md:text-[1.063rem]">
        {/* statement copy */}
        <p className="font-mosk text-5xl font-extrabold leading-[1.1em] xl:text-[3.5rem] xl:leading-[3.875rem]">
          I like to create visually stunning and user-friendly websites for
          businesses of all sizes.
        </p>

        {/* currently open for work */}
        <p className="mb-5 mt-8 text-2xl font-light tracking-wide text-neutral-100 dark:text-neutral-600">
          Currently open to freelance and full-time opportunities.
        </p>

        {/* about me copy */}
        <p className="mb-4 text-[1.125rem] text-neutral-200 dark:text-neutral-500">
          With a background in behavioral health, I take a user-centered
          approach to building websites, putting an emphasis on accessibility
          and creating a smooth seamless user experience. If you have an idea
          you think I could help bring to life,{" "}
          <a
            className="outline-light-theme opacity-transition dark:outline-dark-theme rounded-sm text-accent-100 focus:opacity-80 dark:text-accent-200 lg:hover:opacity-80"
            href="#contact-section"
          >
            feel free to reach out and let&apos;s talk
          </a>
          . When not in front of a computer, I can be found watching films,
          playing video games, spending time with family, enjoying the outdoors,
          or lurking on the{" "}
          <a
            className="outline-light-theme opacity-transition dark:outline-dark-theme rounded-sm text-accent-100 focus:opacity-80 dark:text-accent-200 lg:hover:opacity-80"
            href="https://reddit.com"
            target="_blank"
          >
            front page of the internet
          </a>
          . I also recently started writing my own blog. Check it out{" "}
          <a
            className="outline-light-theme opacity-transition dark:outline-dark-theme rounded-sm text-accent-100 focus:opacity-80 dark:text-accent-200 lg:hover:opacity-80"
            href="/blog"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
