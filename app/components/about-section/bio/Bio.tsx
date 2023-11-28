import Avatar from "./Avatar";
import clsx from "clsx";

export default function Bio({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex flex-col items-center gap-8 mx-auto mb-24 md:gap-12 lg:flex-row-reverse lg:gap-10 lg:w-[735px] lg:mx-auto lg:mb-32 xl:flex-col xl:w-[430px] xl:mx-0 xl:mb-0">
      <Avatar />

      <div
        className={clsx("font-sans font-light md:w-[420px] md:text-[17px]", {
          "text-neutral-500": darkMode,
          "text-neutral-200": !darkMode,
        })}
      >
        <p>My journey in the world of web development has equipped me with a unique set of skills, enabling me to combine analytical thinking with a keen eye for aesthetics. Whether it&apos;s designing an intuitive user interface, optimizing website performance, or tackling complex coding challenges, I always strive for excellence.</p>

        <p>With a firm belief in the power of innovation and continuous improvement, I take on every project as an opportunity to push boundaries and exceed expectations. By keeping myself updated with the latest industry trends and emerging technologies, I ensure that my work remains at the forefront of the ever-evolving web development landscape.</p>

        <p>From conceptualization to implementation, I invest myself wholeheartedly in each project, driven by the desire to provide the best user experience. By combining my technical expertise with an artistic touch, I aim to leave a lasting impression on every website I create.</p>
        
        <p>In a constantly changing digital world, I am excited to embrace new challenges, learn from experiences, and continue growing as a web developer. Through my work, I hope to inspire and elevate online experiences for users across the globe.</p>
      </div>
      
    </div>
  );
}
