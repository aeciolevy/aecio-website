import { SignUpNewsLetter } from "../SignUpNewsletter";

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
          <sup className="hidden break-words whitespace-normal text-orange-500 sm:inline-block italic font-dancing">
            (I’m in the process, not there yet)
          </sup>
        </span>
        <br className="sm:hidden" />
        <span className="sm:hidden text-2xl break-words whitespace-normal text-orange-500 -rotate-1 italic font-dancing">
          (I’m in the process, not there yet)
        </span>
      </div>
      <div className="w-full text-left sm:text-lg sm:text-center text-neutral-400 font-light p-2 sm:p-4">
        Documentation of the process of creating a fully remote business.
        <br />
        Reflections on how to achieve financial and time freedom, the
        much-desired AUTONOMY.
        <br />
        How to reach the level of only doing what I’m interested in and love.
      </div>
      <div className="w-full m-auto lg:w-3/4 xl:w-2/4 p-2 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-0">
          <SignUpNewsLetter buttonCTA="Receive the letters" />
        </div>
      </div>
    </div>
  );
}
