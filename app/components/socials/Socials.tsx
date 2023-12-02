import Social from "./Social";
import { socials } from "@/app/data";

export default function Socials({ darkMode }: { darkMode: boolean }) {
  const socialElements = socials.map((social) => {
    return <Social key={social.id} {...{ darkMode, social }} />;
  });

  return (
    <>
      <ul className="flex gap-4 lg:flex-col">{socialElements}</ul>
    </>
  );
}
