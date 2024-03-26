import Image from "next/image";
import { Curly } from "../assets/Curly";

export function About() {
  return (
    <div className="w-full flex flex-col py-8 items-center">
      <Image
        src="/images/PROFILE.png"
        alt="Aécio"
        width={150}
        height={150}
        className="rounded-full"
      />
      <h1 className="text-3xl tracking-wide">
        Oi, eu sou
      </h1>
      <div className="py-2">
        <Curly
          text="Aécio"
          textClassName="font-serif text-5xl fill-primary-500"
        />
      </div>
      <div className="flex flex-col mt-4 space-y-4" >
        <p className="text-lg font-thin tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-lg font-thin tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="w-full sm:w-1/2 mt-10 m-auto">
        <h3> Minha filosofia, social proof </h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-0 sm:p-10">
          <input
            className="bg-gray-800 w-full sm:w-3/4 rounded-md text-gray-400 text-base font-normal p-4"
            placeholder="Digite seu e-mail"
          />
          <div className="sm:-ml-2 bg-orange-500 w-full sm:w-1/4 rounded-lg justify-center items-center inline-flex">
            <button className="text-slate-950 text-base font-normal p-4">Ter acesso as cartas</button>
          </div>
        </div>

      </div>
    </div >
  );
}

