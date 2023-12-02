import clsx from "clsx";
import Avatar from "../../shared/Avatar";

export default function Bio({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex flex-col items-center gap-8 mx-auto mb-24 md:gap-12 md:w-[696px] md:mb-16 lg:flex-row-reverse lg:gap-10 lg:w-[735px] lg:mx-auto lg:mb-32 xl:flex-col xl:w-[564px] xl:mx-0 xl:mb-0">
      <Avatar parent="bio" />

      <div
        className={clsx("mt-4 font-sans font-light md:text-[17px]", {
          "text-neutral-500": darkMode,
          "text-neutral-200": !darkMode,
        })}
      >
        {/* statement copy */}
        <p className="mb-8 font-mosk text-5xl font-extrabold leading-[53px] xl:text-[3.5rem] xl:leading-[62px]">
          I like to create visually stunning and user-friendly websites for
          businesses of all sizes.
        </p>

        {/* about me copy */}
        <p className="mb-4 text-[18px]">
          With a background in behavioral health, I take a user-centered
          approach to building websites, putting an emphasis on accessibility
          and creating a smooth seamless user experience. If you have an idea
          you think I could help bring to life,{" "}
          <a
            className={clsx("", {
              "text-accent-200": darkMode,
              "text-accent-100": !darkMode,
            })}
            href="#contact-section"
          >
            feel free to reach out and let&apos;s talk
          </a>
          . When not in front of a computer, I can be found watching films,
          playing video games, spending time with family, enjoying the outdoors,
          or lurking on the{" "}
          <a
            className={clsx("", {
              "text-accent-200": darkMode,
              "text-accent-100": !darkMode,
            })}
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
