import Avatar from "./Avatar";
export default function Bio(props: any) {
  return (
    <article className="flex flex-col items-center gap-16 mx-auto mb-20">
      <p className=" mt-16 text-neutral-500 ">
      <Avatar />
      </p>
    </article>
  );
}
