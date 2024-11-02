import { Language } from "@/app/types/language";
import { Header } from "@/app/[lang]/components/layout/Header";
import { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  params: {
    lang: Language;
  };
};


const songsSpotifyLinks = [
  "https://open.spotify.com/embed/track/6LJQiQk7OOEP9wGyPkHl4w?utm_source=generator",
  "https://open.spotify.com/embed/track/0ZDWPTrkQrFbVZ2TDGY8wl?utm_source=generator",
  "https://open.spotify.com/embed/track/0QUfvq0E1IZ0KjDj41ks0S?utm_source=generator",
  "https://open.spotify.com/embed/track/39JPCa5ApSprA6Jiboi27a?utm_source=generator",
  "https://open.spotify.com/embed/track/7mllWSUaV9lNvyFa3gRdA2?utm_source=generator",
  "https://open.spotify.com/embed/track/5u4dnJLS7jzK3fxtt58Hlh?utm_source=generator",
  "https://open.spotify.com/embed/track/25wN4MxCf7l5e4bjgJJkzP?utm_source=generator",
  "https://open.spotify.com/embed/track/43gEm2TWL98Bt7AQyPR4NG?utm_source=generator",
  "https://open.spotify.com/embed/track/0sEtXC6ljhLOZIJGNSWoHK?utm_source=generator",
  "https://open.spotify.com/embed/track/2h3qd5l4bHvaoVax3MSNZk?utm_source=generator"
]

export default async function SongWritePage({ params: { lang } }: Props) {

  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary} />
      <main className="p-6 sm:p-20 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 auto-rows-auto items-center">
          <img className="hidden sm:block aspect-square object-cover max-h-44 sm:max-h-80 rounded-lg border-orange-500 border-4" loading="lazy" src="/images/songwriter.jpg" alt="Composições" />
          <div className="flex flex-col justify-start items-start space-y-2">
            <h1 className="text-2xl sm:text-4xl font-bold text-left">Comecei a escrever músicas em 2023, quase sem perceber.</h1>
            <p className="lg:hidden text-md font-thin text-left">
              Entre projetos e momentos do dia a dia, ideias de canções surgiam – muitas delas ligadas à saudade do Nordeste e da vaquejada, uma parte profunda da minha identidade.

            </p>
            <p className="lg:hidden text-md font-thin text-left">
              Longe do Brasil, cada lembrança virou música. Aqui estão as canções que consegui transformar em realidade, cada uma carregando um pedaço da minha história.
            </p>
            <div className="hidden lg:block space-y-4">
              <p className="text-lg font-thin text-left">
                A paixão pela música veio do meu pai, um verdadeiro descobridor de talentos. Ele sempre foi aquele que enxergava o brilho de um artista antes de qualquer outra pessoa. Foi ele quem me apresentou muitos músicos que só viriam a fazer sucesso anos depois. Embora eu não tenha crescido rodeado de artistas, fui cercado por uma constante trilha sonora, moldada pelo gosto e pelas descobertas do meu pai.
              </p>

              <p className="text-lg font-thin text-left">
                Ao longo dos anos, me dediquei à escrita de conteúdos e scripts de vendas – para mim e para outras pessoas. Mas, entre um projeto e outro, em momentos inesperados, surgiam melodias e letras. Uma ideia de música surgia enquanto eu pensava em estratégias de vendas, outra enquanto lia um livro. Às vezes, até ao colocar meu filho para dormir, as palavras e as notas apareciam na minha mente, quase como um sussurro.
              </p>

              <p className="text-lg font-thin text-left">
                Um dia, decidi escrever uma dessas ideias, dar forma àquilo que minha mente insistia em criar. E, quase sem perceber, comecei a compor.
              </p>

              <p className="text-lg font-thin text-left">
                No início, as canções que vinham à minha cabeça tinham uma forte conexão com a vaquejada – uma tradição profundamente enraizada na minha identidade nordestina. Estando longe do Brasil, do Nordeste e dessa cultura tão viva, a saudade se transformou em música. A distância fez com que cada lembrança, cada pedaço da minha terra, ganhasse vida em forma de canção.
              </p>

              <p className="text-lg font-thin text-left">
                Aqui estão algumas das músicas que tive a alegria de ver produzidas por um artista talentoso. Cada uma delas carrega um pedaço da minha história e da minha saudade.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-6">
          {songsSpotifyLinks.map((link, index) => (
            <iframe
              className="w-full h-[152px] sm:w-[250px] sm:h-[352px] rounded-lg"
              key={index}
              style={{ "borderRadius": "12px" }}
              src={link}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          ))}
        </div>
      </main>

    </>
  );
}
