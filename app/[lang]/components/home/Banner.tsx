export function Banner() {
  return (
    <div className="w-full flex flex-col gap-4 relative sm:p-10">
      <div className="gap-4 text-center">
        <span className="font-serif text-orange-500 text-6xl sm:text-8xl font-bold tracking-wide">
          Explore
        </span>
        <span className="font-serif text-white text-6xl sm:text-8xl font-bold tracking-wide">
          {" "}
          novos
        </span>
        <br />
        <span className="font-serif text-orange-500 text-6xl sm:text-8xl font-bold tracking-wide">
          Horizontes
        </span>
      </div>
      <div className="w-full text-left sm:text-center text-neutral-400 font-thin tracking-tight">
        Descubra a comunicação para influenciar vendas.
        <br />
        Explore estratégias para operar um negócio remoto com eficiência, usando
        sistemas e automação.
        <br />
        Desvende o potencial único de cada um e alcance-o plenamente.
      </div>
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
          <div className="sm:hidden text-left text-zinc-600 text-sm font-thing leading-snug tracking-tight">
            Inscreva-se para receber lições práticas sobre comunicação e
            negócios online, e continue evoluindo. As lições serão enviadas em
            intervalos irregulares.
          </div>
        </div>
      </div>
    </div>
  );
}
