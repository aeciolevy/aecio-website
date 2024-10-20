import Image from "next/image";
import Link from "next/link";
import { SignUpNewsLetter } from "../SignUpNewsletter";
import { portugueseUserGroup } from "@/lib/addUserGroups";



export function AboutPT() {
  return (
    <div className="w-full flex flex-col p-2 sm:p-4 space-y-2 items-center">
      <h1 className="text-5xl text-orange-500 font-semibold tracking-wide">
        Quem é Aécio?
      </h1>
      <p className="text-center text-neutral-400 font-thin tracking-wide">
        Apenas uma pessoa tentando subir de nível no jogo da vida.
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
          Oi, eu sou Aécio.
        </p>
        <p className="text-lg tracking-wide">
          Eu sou um desenvolvedor de software que está buscando criar um negócio rentável que opere totalmente remoto.
        </p>
        <p className="text-lg tracking-wide">
          Eu sou obcecado com performance, eu gosto de entender como as coisas funcionam e como a gente pode otimizar nosso dia de forma continua para que a gente faça mais de forma gradual o que realmente tenhamos interesse.
        </p>
        <p className="text-lg tracking-wide">
          Eu acredito muito no desenvolvimento em áreas fundamentais para a nossa evolução como <em>comunicação, aprendizagem, marketing e vendas.</em>
        </p>
        <Link
          href="/about"
          className="px-8 py-4 w-fit font-normal hover:text-primary-500 text-white tracking-[0] leading-[normal] rounded overflow-hidden border border-solid hover:border-primary-500 border-white">
          Ler mais sobre mim
        </Link>

      </div>

      <div className="w-full mt-4 sm:mt-12">

        <div className="flex flex-col sm:flex-row sm:flex-wrap mt-4 gap-4 sm:gap-0 sm:p-10">
          <SignUpNewsLetter buttonCTA="Ter acesso as cartas" userGroup={portugueseUserGroup} />
        </div>

        <div className="text-center">
          <p className="font-semibold text-lg tracking-wide">
            Devemos explorar nossa curiosidade e ir fundos nela para conquistamos a <strong>AUTONOMIA</strong> de
          </p>
          <ul className="flex-col items-center italic text-lg tracking-wide">
            <li>"Viver da forma que queremos"</li>
            <li>"Poder fazer o que amamos"</li>
          </ul>
        </div>

      </div>
    </div >
  );
}

