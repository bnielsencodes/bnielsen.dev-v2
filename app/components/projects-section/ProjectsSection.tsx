import Image from "next/image";
import audiophileMockup from "@/public/assets/mockups/Laptops/audiophile.png";
import securepassMockup from "@/public/assets/mockups/Mobile/securepass.png";
import quizzicalStartMockup from "@/public/assets/mockups/Tablets/quizzical-start.png";
import quizzicalQuizMockup from "@/public/assets/mockups/Tablets/quizzical-quiz.png";
import dictionaryDarkMockup from "@/public/assets/mockups/Tablets/dictionary-dark.png";
import dictionaryLightMockup from "@/public/assets/mockups/Tablets/dictionary-light.png";
import clsx from "clsx";

export default function ProjectsSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="projects-section"
      className={clsx("pt-20 px-7 pb-8 overflow-x-clip", {
        "bg-neutral-100": darkMode,
        "bg-neutral-600": !darkMode,
      })}
    >
      {/* section heading */}
      <p
        className={clsx(
          "relative z-0 w-[130px] mx-auto text-[2.5rem] font-bold text-center after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[93px] after:h-[14px]",
          {
            "text-neutral-500 after:bg-neutral-300": darkMode,
            "text-neutral-200 after:bg-neutral-400": !darkMode,
          }
        )}
      >
        Work
      </p>
      <div className="flex flex-col justify-center pb-[25px] mt-[120px] text-[0.9rem] ">
        {/* Audiophile project */}
        <div className="mb-32">
          <Image
            className={clsx("w-full h-auto", {
              "drop-shadow-none": darkMode,
              "drop-shadow-custom": !darkMode,
            })}
            src={audiophileMockup}
            alt="letter N logo"
            width="2110"
            height="1286"
            sizes="100vw"
          />
          <p
            className={clsx("mt-8 mb-3 text-4xl font-bold", {
              "text-neutral-500 ": darkMode,
              "text-neutral-200 ": !darkMode,
            })}
          >
            Audiophile
          </p>
          <p
            className={clsx("text-lg", {
              "text-neutral-400": darkMode,
              "text-neutral-300": !darkMode,
            })}
          >
            A multi-page e-commerce website with cart functionality and a
            checkout process
          </p>
        </div>

        {/* SecurePass project */}
        <div className="mb-32">
          <Image
            className={clsx("w-[calc(100%-150px)] h-auto mx-auto", {
              "drop-shadow-none": darkMode,
              "drop-shadow-custom": !darkMode,
            })}
            src={securepassMockup}
            alt="letter N logo"
            width="430"
            height="883"
            sizes="100vw"
          />
          <p
            className={clsx("mt-8 mb-3 text-4xl font-bold", {
              "text-neutral-500 ": darkMode,
              "text-neutral-200 ": !darkMode,
            })}
          >
            SecurePass
          </p>
          <p
            className={clsx("text-lg", {
              "text-neutral-400": darkMode,
              "text-neutral-300": !darkMode,
            })}
          >
            A strong random password generator
          </p>
        </div>

        {/* Quizzical Project */}
        <div className="mb-32">
          <div className="relative w-full h-[400px]">
            <Image
              className={clsx(
                "absolute top-[35%] left-[35%] z-20 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-150px)] h-auto mx-auto",
                {
                  "drop-shadow-none": darkMode,
                  "drop-shadow-custom": !darkMode,
                }
              )}
              src={quizzicalStartMockup}
              alt="letter N logo"
              width="700"
              height="1019"
              sizes="100vw"
            />
            <Image
              className={clsx(
                "absolute top-[65%] left-[65%] z-10 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-150px)] h-auto mx-auto",
                {
                  "drop-shadow-none": darkMode,
                  "drop-shadow-custom": !darkMode,
                }
              )}
              src={quizzicalQuizMockup}
              alt="letter N logo"
              width="700"
              height="1019"
              sizes="100vw"
            />
          </div>
          <p
            className={clsx("mt-8 mb-3 text-4xl font-bold", {
              "text-neutral-500 ": darkMode,
              "text-neutral-200 ": !darkMode,
            })}
          >
            Quizzical
          </p>
          <p
            className={clsx("text-lg", {
              "text-neutral-400": darkMode,
              "text-neutral-300": !darkMode,
            })}
          >
            A quiz app that fetches data from The Open Trivia Database API
          </p>
        </div>

        {/* Dictionary Web App Project */}
        <div className="mb-32">
          <div className="relative w-full h-[400px]">
            <Image
              className={clsx(
                "absolute top-[35%] left-[35%] z-20 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-150px)] h-auto mx-auto",
                {
                  "drop-shadow-none": darkMode,
                  "drop-shadow-custom": !darkMode,
                }
              )}
              src={dictionaryDarkMockup}
              alt="letter N logo"
              width="700"
              height="1019"
              sizes="100vw"
            />
            <Image
              className={clsx(
                "absolute top-[65%] left-[65%] z-10 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-150px)] h-auto mx-auto",
                {
                  "drop-shadow-none": darkMode,
                  "drop-shadow-custom": !darkMode,
                }
              )}
              src={dictionaryLightMockup}
              alt="letter N logo"
              width="700"
              height="1019"
              sizes="100vw"
            />
          </div>
          <p
            className={clsx("mt-8 mb-3 text-4xl font-bold", {
              "text-neutral-500 ": darkMode,
              "text-neutral-200 ": !darkMode,
            })}
          >
            Dictionary Web App
          </p>
          <p
            className={clsx("text-lg", {
              "text-neutral-400": darkMode,
              "text-neutral-300": !darkMode,
            })}
          >
            A dictionary web app that fetches data from the Free Dictionary API
          </p>
        </div>
      </div>
    </section>
  );
}
