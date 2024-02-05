import { resources as resourcesData } from "@/app/_data/blog/resourcesData";
import Newsletter from "./Newsletter";

export default function NewslettersSection() {
  return (
    <section className="relative w-full border-t-2 border-neutral-200 dark:border-neutral-500 xl:max-w-[760px]">
      <p
        id="newsletters"
        className="absolute top-[-22px] left-[10px] px-[6px] bg-neutral-600 dark:bg-neutral-100 text-3xl font-bold xl:top-[-97px] xl:pt-[74px]"
      >
        Newsletters
      </p>

      <ul
        className="grid gap-6 max-w-[400px] mt-[50px] mx-auto md:grid-cols-2 md:items-start md:gap-8 md:max-w-[785px] md:mt-[80px] lg:mt-20"
        role="list"
        aria-labelledby="newsletters"
      >
        {resourcesData.newsletters.map((newsletter) => (
          <Newsletter key={newsletter.id} {...{ newsletter }} />
        ))}
      </ul>
    </section>
  );
}
