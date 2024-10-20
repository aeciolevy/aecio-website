import Image from "next/image";
import Link from "next/link";
import { englishUserGroup } from "@/lib/addUserGroups";
import { SignUpNewsLetter } from "../SignUpNewsletter";

export function AboutEN() {
  return (
    <div className="w-full flex flex-col p-2 sm:p-4 space-y-2 items-center">
      <h1 className="text-5xl text-orange-500 font-semibold tracking-wide">
        Who is Aécio?
      </h1>
      <p className="text-center text-neutral-400 font-thin tracking-wide">
        Just a person trying to level up in the game of life.
      </p>

      <Image
        src="/images/PROFILE.png"
        alt="Aécio"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="flex flex-col mt-4 space-y-4" >
        <p className="font-bold text-3xl tracking-wide">
          Hi, I'm Aécio.
        </p>
        <p className="text-lg tracking-wide">
          I’m a software developer seeking to create a profitable business that operates fully remotely.
        </p>
        <p className="text-lg tracking-wide">
          I am obsessed with performance, and I like understanding how things work and how we can continuously optimize our day so that we gradually do more of what we are genuinely interested in.
        </p>
        <p className="text-lg tracking-wide">
          I strongly believe in developing skills in fundamental areas for our growth, such as <em>communication, learning, marketing, and sales.</em>
        </p>
        <Link
          href="/about"
          className="px-8 py-4 w-fit font-normal hover:text-primary-500 text-white tracking-[0] leading-[normal] rounded overflow-hidden border border-solid hover:border-primary-500 border-white">
          Read more about me
        </Link>

      </div>

      <div className="w-full mt-4 sm:mt-12">

        <div className="flex flex-col sm:flex-row sm:flex-wrap mt-4 gap-4 sm:gap-0 sm:p-10">
          <SignUpNewsLetter buttonCTA="Get Access to The Letters" userGroup={englishUserGroup} />
        </div>

        <div className="text-center">
          <p className="font-semibold text-lg tracking-wide">
            We must explore our curiosity deeply to achieve <strong>AUTONOMY</strong> of
          </p>
          <ul className="flex-col items-center italic text-lg tracking-wide">
            <li>"Living the way we want"</li>
            <li>"Being able to do what we love"</li>
          </ul>
        </div>

      </div>
    </div >
  );
}

