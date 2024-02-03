import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function YoutubeChannel({
  channel,
}: {
  channel: {
    id: number;
    title: string;
    link: string;
    img: StaticImageData;
    tags: { id: number; name: string }[];
  };
}) {
  return (
    <li className="flex items-center gap-6">
      <Image
        className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
        src={channel.img}
        alt={`${channel.title} YouTube Channel avatar image`}
        width="0"
        height="0"
        sizes="100vw"
      />

      <div className="flex flex-col gap-1">
        <div>
          <Link
            className="text-[1.375rem] font-medium lg:hover:opacity-80"
            href="https://youtube.com/@thefutur"
          >
            {channel.title}
          </Link>
        </div>

        <div className="flex gap-2">
          {channel.tags.map((tag) => (
            <span
              className="py-[6px] px-3 rounded-lg bg-neutral-200 text-sm tracking-wide bg-opacity-70"
              key={tag.id}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
