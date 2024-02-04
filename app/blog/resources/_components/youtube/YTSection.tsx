import { resources as resourcesData } from "@/app/_data/blog/resourcesData";
import YTChannel from "./YTChannel";

export default function YTSection() {
  return (
    <section className="relative w-full border-t-2 border-neutral-500 xl:max-w-[760px]">
      <p
        id="youtube"
        className="absolute top-[-85px] left-[10px] px-[6px] bg-neutral-100 text-3xl font-semibold xl:pt-[62px]"
      >
        YouTube Channels
      </p>

      <ul
        className="grid grid-cols-1 gap-y-4 max-w-[400px] mt-[50px] mx-auto md:grid-cols-2 md:gap-x-3 md:max-w-[785px] md:mt-[80px] lg:gap-x-5 lg:gap-y-6 lg:mt-20"
        role="list"
        aria-labelledby="youtube"
      >
        {resourcesData.youtube.map((channel) => (
          <YTChannel key={channel.id} {...{ channel }} />
        ))}
      </ul>
    </section>
  );
}
