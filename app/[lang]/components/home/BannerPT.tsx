import { SignUpNewsLetter } from "../SignUpNewsletter";
import { portugueseUserGroup } from "@/lib/addUserGroups";

export function BannerPT() {
  return (
    <div className="w-full flex flex-col gap-4 relative sm:p-4">
      <div className="gap-4 text-left sm:text-center p-2 sm:p-4">
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          Trabalhe de qualquer lugar.
        </span>
        <br />
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          Consquiste sua autonomia.
        </span>
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          {" "}
          Faça o que você gosta.
          <br className="hidden md:inline-block" />
          <sup className="hidden text-[24px] break-words whitespace-normal text-orange-500 sm:inline-block italic font-dancing">
            (Essa é a minha visão, o caminho que eu estou percorrendo 👇)
          </sup>
        </span>
        <br className="sm:hidden" />
        <span className="sm:hidden text-2xl break-words whitespace-normal text-orange-500 -rotate-1 italic font-dancing">
          (Essa é a minha visão, o caminho que eu estou percorrendo 👇)
        </span>
      </div>
      <div className="w-full sm:w-[50%] sm:m-auto text-left sm:text-lg text-neutral-400 font-light p-2 sm:p-4">
        Totalmente escrito por um humano.
        O que eu publicar é escrito por mim.
        <br />
        Documentação do meu trabalho, aprenziados e processos sem filtro.
      </div>
      <div className="w-full m-auto lg:w-3/4 xl:w-2/4 p-2 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-0">
          <SignUpNewsLetter buttonCTA="Receba as cartas" userGroup={portugueseUserGroup} />
        </div>
      </div>
    </div>
  );
}
