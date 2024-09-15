export function BannerPT() {
  return (
    <div className="w-full flex flex-col gap-4 relative sm:p-4">
      <div className="gap-4 text-left sm:text-center">
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          Trabalhe de qualquer lugar. Consquiste sua autonomia.
        </span>
        <br className="sm:hidden" />
        <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
          {" "}Faça o que você gosta.
          <sup className="hidden break-words whitespace-normal text-orange-500 sm:inline-block italic font-dancing">
            (estou no processo ainda não cheguei lá)
          </sup>
        </span>
        <br className="sm:hidden" />
        <span className="sm:hidden text-2xl break-words whitespace-normal text-orange-500 -rotate-1 italic font-dancing">
          (estou no processo ainda não cheguei lá)
        </span>
        <br />
      </div>
      <div className="w-full text-left sm:text-xl sm:text-center text-neutral-400 font-thin tracking-tight">
        Documentação do processo de um criar um negócio totalmente remoto.
        <br />
        Reflexões de como conquistar liberdade financeira e de tempo, a tão sonhada AUTONOMIA.
        <br />
        Como chegar no nível de fazer apenas o que eu tenho interesse e gosto.
      </div>
      <br className="sm:hidden" />
      <div className="w-full m-auto lg:w-3/4 xl:w-2/4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-0 sm:p-10">
          <input
            className="bg-gray-800 w-full sm:w-3/4 rounded-md text-gray-400 text-base font-normal p-4"
            placeholder="Digite seu e-mail"
          />
          <div className="sm:-ml-2 bg-orange-500 w-full sm:w-1/4 md:w rounded-lg justify-center items-center inline-flex">
            <button className="text-slate-950 text-base font-normal p-4">
              Receber as cartas
            </button>
          </div>
          <div className="text-left text-zinc-600 text-sm font-thing leading-snug tracking-tight">
            Inscreva-se para receber lições práticas sobre comunicação e
            negócios online, e continue evoluindo. As lições serão enviadas em
            intervalos irregulares.
          </div>
        </div>
      </div>
    </div>
  );
}

