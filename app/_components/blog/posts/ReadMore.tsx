import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrow-right.svg";

export default function ReadMore() {
  return (
    <div className="group/arrow relative w-[105px]">
      <p className="text-neutral-200 dark:text-neutral-500 font-sans text-[16px] font-extrabold">
        Read more
      </p>
      <Image
        className="absolute top-[2.5px] right-0 w-[20px] h-[20px] transition-all opacity-0 lg:group-hover:opacity-100 lg:group-hover/arrow:scale-110"
        src={arrowRight}
        alt="arrow pointing right"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  );
}
