import Avatar from "../../shared/Avatar";

export default function Bio() {
  return (
    <div className="flex flex-col items-center gap-8 mx-auto mb-24 md:gap-12 md:w-[720px] md:mb-16 lg:flex-row-reverse lg:gap-10 lg:w-[735px] lg:mx-auto lg:mb-32 xl:flex-col xl:w-[605px] xl:mx-0 xl:mb-0">
      <Avatar parent="bio" />

      <div className="mt-4 font-sans font-light md:text-[1.063rem]">
        {/* statement copy */}
        <p className="text-neutral-200 font-mosk text-5xl font-extrabold leading-[1.1em] dark:text-neutral-500 xl:text-[3.5rem] xl:leading-[3.875rem]">
          I like to create visually stunning and user-friendly websites for
          businesses of all sizes.
        </p>

        {/* currently open for work */}
        <p className="mt-8 mb-5 text-neutral-100 text-2xl font-light tracking-wide dark:text-neutral-600">
          Currently open to freelance and full-time opportunities.
        </p>

        {/* about me copy */}
        <p className="mb-4 text-neutral-200 text-[1.125rem] dark:text-neutral-500">
          With a background in behavioral health, I take a user-centered
          approach to building websites, putting an emphasis on accessibility
          and creating a smooth seamless user experience. If you have an idea
          you think I could help bring to life,{" "}
          <a
            className="outline-light-theme opacity-transition rounded-sm text-accent-100 dark:outline-dark-theme dark:text-accent-200 focus:opacity-80 lg:hover:opacity-80"
            href="#contact-section"
          >
            feel free to reach out and let&apos;s talk
          </a>
          . When not in front of a computer, I can be found watching films,
          playing video games, spending time with family, enjoying the outdoors,
          or lurking on the{" "}
          <a
            className="outline-light-theme opacity-transition rounded-sm text-accent-100 dark:outline-dark-theme dark:text-accent-200 focus:opacity-80 lg:hover:opacity-80"
            href="https://reddit.com"
            target="_blank"
          >
            front page of the internet
          </a>
          .
        </p>
      </div>
    </div>
  );
}
