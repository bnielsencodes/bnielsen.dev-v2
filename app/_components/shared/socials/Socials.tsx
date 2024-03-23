import Social from "./Social";
import clsx from "clsx";

export default function Socials({
  parent,
  direction,
}: {
  parent: string;
  direction: string;
}) {
  const socials = [
    {
      id: 1,
      name: "linkedIn",
      link: "https://linkedin.com/in/bnielsencodes",
    },
    {
      id: 2,
      name: "github",
      link: "https://github.com/bnielsencodes",
    },
    {
      id: 3,
      name: "email",
      link: "mailto:brandon@bnielsen.dev",
    },
  ];

  return (
    <ul
      className={clsx("flex gap-4", {
        "flex-col": direction === "column",
        "flex-row": direction === "row",
      })}
    >
      {socials.map((social) => {
        return <Social key={social.id} parent={parent} {...{ social }} />;
      })}
    </ul>
  );
}
