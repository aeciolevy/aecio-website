import { SignUpNewsLetter } from "../SignUpNewsletter";
import { englishUserGroup } from "@/lib/addUserGroups";

export function BannerEN() {
  return (
    <div className="w-full flex flex-col gap-4 relative sm:p-4">
      <div className="gap-4 text-left sm:text-center p-2 sm:p-4">
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          Work from anywhere.{" "}
        </span>
        <br />
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          Achieve your autonomy.
        </span>
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          {" "}
          Do what you love.
          <br className="hidden md:inline-block" />
          <sup className="hidden text-[22px] break-words whitespace-normal text-orange-500 sm:inline-block italic font-dancing">
            (This is my vision, the path I&apos;m following 👇)
          </sup>
        </span>
        <br className="sm:hidden" />
        <span className="sm:hidden w-11/12 text-2xl break-words whitespace-normal text-orange-500 -rotate-1 italic font-dancing">
          (This is my vision, the path I&apos;m following 👇)
        </span>
      </div>
      <div className="w-full sm:w-[50%] sm:m-auto text-left sm:text-lg  text-neutral-400 font-light p-2 sm:p-4">
        Fully written by a human. What I publish is written by me.
        <br />
        Documentation of my work, learnings, and processes without a filter.
      </div>
      <div className="w-full m-auto lg:w-3/4 xl:w-2/4 p-2 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-0">
          <SignUpNewsLetter buttonCTA="Receive the letters" userGroup={englishUserGroup} />
        </div>
      </div>
    </div>
  );
}
