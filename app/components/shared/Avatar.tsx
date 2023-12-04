import clsx from "clsx";

export default function Avatar({ parent }: { parent: string }) {
  return (
    <div
      className={clsx(
        "relative w-[335px] h-[335px] border-[3px] border-neutral-300 rounded-morph bg-avatar bg-[50%] bg-no-repeat bg-cover animate-morph transition-all duration-1000 ease-in-out lg:ml-[5px] xl:ml-0",
        {
          "hidden lg:block": parent === "header",
          "block lg:hidden": parent === "bio",
        }
      )}
    ></div>
  );
}
