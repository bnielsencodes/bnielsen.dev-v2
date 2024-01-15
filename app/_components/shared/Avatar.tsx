import clsx from "clsx";

export default function Avatar({ parent }: { parent: string }) {
  return (
    <div
      className={clsx(
        "relative h-[335px] w-[335px] animate-morph rounded-morph border-[3px] border-neutral-300 bg-avatar bg-cover bg-[50%] bg-no-repeat transition-all duration-1000 ease-in-out lg:ml-[5px] xl:ml-0",
        {
          "hidden lg:block": parent === "header" || parent === "blog",
          "block lg:hidden": parent === "bio",
          "h-[280px] w-[280px]": parent === "blog",
        },
      )}
    ></div>
  );
}
