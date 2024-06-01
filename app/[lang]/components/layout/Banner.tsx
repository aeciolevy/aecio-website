const Banner = () => {
  return (
    <div className="w-full relative">
      <div className="w-[861px] h-[551px] left-[420px] top-[432px] absolute">
        <div className="w-[822px] left-[19px] top-[263px] absolute text-center text-neutral-400 text-[22px] font-medium font-['Space Grotesk'] tracking-tight">
          Descubra a comunicação para influenciar vendas. Explore estratégias
          para operar um negócio remoto com eficiência, usando sistemas e
          automação. Desvende o potencial único de cada um e alcance-o
          plenamente.
        </div>
        <div className="w-[861px] left-0 top-0 absolute text-center">
          <span className="text-orange-500 text-8xl font-bold font-['Cormorant'] tracking-wide">
            Explore
          </span>
          <span className="text-white text-8xl font-bold font-['Cormorant'] tracking-wide">
            {" "}
            novos{" "}
          </span>
          <span className="text-orange-500 text-8xl font-bold font-['Cormorant'] tracking-wide">
            Horizontes
          </span>
        </div>
        <div className="w-[646px] h-[138px] left-[93px] top-[413px] absolute">
          <div className="w-[646px] left-0 top-[94px] absolute text-center text-zinc-600 text-sm font-medium font-['Space Grotesk'] leading-snug tracking-tight">
            Inscreva-se para receber lições práticas sobre comunicação e
            negócios online, e continue evoluindo. As lições serão enviadas em
            intervalos irregulares.
          </div>
          <div className="w-[646px] h-[78px] left-0 top-0 absolute">
            <div className="w-[646px] h-[78px] left-0 top-0 absolute bg-gray-800 rounded-md" />
            <div className="w-[143px] h-[78px] px-6 py-3 left-[503px] top-0 absolute bg-orange-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-slate-950 text-base font-normal font-['Manrope']">
                Ler as cartas
              </div>
            </div>
            <div className="left-[24px] top-[30px] absolute text-gray-400 text-base font-normal font-['Space Grotesk']">
              Digite seu E-mail
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
