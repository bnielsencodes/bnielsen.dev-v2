import Social from "./Social";
import { socials } from "@/app/data";

export default function Socials({
  darkMode,
  isFooter,
}: {
  darkMode: boolean;
  isFooter: boolean;
}) {
  const socialElements = socials.map((social) => {
    return <Social key={social.id} {...{ darkMode, social, isFooter }} />;
  });

  return (
    <div>
      <ul className="flex">{socialElements}</ul>
    </div>
  );
}
