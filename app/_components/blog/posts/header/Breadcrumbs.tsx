export default function Breadcrumbs({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  const url = `/blog/posts/${slug}`;

  return (
    <div className="flex items-center text-neutral-300 dark:text-neutral-400 font-sans text-[15px] font-medium text-opacity-80">
      <a
        className="transition-all hover:underline hover:opacity-80"
        href="/blog"
      >
        Home
      </a>
      <p className="px-[8px] mb-1 text-[22px]">&#8250;</p>
      <a
        className="transition-all hover:underline hover:opacity-80"
        href="/blog/posts"
      >
        Posts
      </a>
      <p className="px-[8px] mb-1 text-[22px]">&#8250;</p>
      <a className="transition-all hover:underline hover:opacity-80" href={url}>
        {name}
      </a>
    </div>
  );
}
