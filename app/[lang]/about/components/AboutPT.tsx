import Link from "next/link";
import { Links } from "../../enums/links";

export const AboutPT = () => {
  return (
    <div className="flex flex-col lg:space-y-8 space-y-12 text-center" >
      <h1 className="text-center text-2xl lg:text-5xl">
        Oi, eu sou o <strong className="font-dancing" > Aécio </strong>
      </h1>

      <h1 className="font-medium text-2xl lg:text-4xl">
        A versão resumida
      </h1>
      <div className="w-full space-y-2 text-xl font-light text-left lg:w-9/12 xl:w-6/12 mx-auto my-8">
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">Sou engenheiro elétrico e atualmente trabalho como engenheiro de software</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">Nasci em Campina Grande, Brasil, onde passei a maior parte da minha vida</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">Tive um canal no <a className="underline text-orange-500" href={Links.YOUTUBE}>YouTube sobre Vaquejada </a> por alguns anos</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">Tenho um grande interesse por performance humana, empreendedorismo e negócios remotos</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">Toco violão e <Link className="underline text-orange-500" href="/composicoes"> escrevo músicas </Link></p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">Passo a maior parte do meu tempo livre lendo livros e levantando peso no Canadá. </p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">
            Quando estou no Brasil, geralmente estou montando cavalo ou competindo em vaquejada.
          </p>
        </div>
      </div>

      <h1 className="font-medium text-2xl lg:text-4xl">
        Mergulhando no desconhecido
      </h1>
      <div className="w-full text-xl font-light space-y-4 text-left lg:w-9/12 xl:w-6/12 mx-auto my-8">
        <p className="whitespace-normal">
          Um dos meus maiores objetivos de vida é construir um negócio que tenha valor verdadeiro para os outros e que me permita fazer o que eu amo, enquanto tenho condição física para isso (de preferência ser um jovem rico, em vez de um velho rico).
        </p>
        <p className="whitespace-normal">
          Esse desejo intenso provavelmente veio de uma frase do meu avô que eu nunca esqueci:
          "Eu não quero um plano de aposentadoria. Se o que eu passei a vida construindo não me sustentar quando eu estiver velho, eu falhei."
        </p>
        <p className="whitespace-normal">
          Isso ficou comigo desde os meus dez anos. E tem se tornado mais forte nos últimos anos. Eu fiz uma leve modificação na filosofia do meu avô: acredito que devemos ter um negócio que nos sustente desde a juventude, enquanto ainda temos energia para aproveitar mais o poder do dinheiro.
        </p>
      </div>

      <h1 className="font-medium  text-2xl lg:text-4xl">
        Quer se manter em contato
      </h1>
      <div className="w-full text-xl font-light space-y-4 text-left lg:w-9/12 xl:w-6/12 mx-auto my-8">
        <p className="whitespace-normal">
          A melhor maneira de se conectar comigo e acompanhar meu trabalho é através da minha newsletter.
        </p>
        <p className="whitespace-normal">
          Eu envio uma quase toda semana, compartilhando o que estou aprendendo e trabalhando no momento, assim como reflexões, inspirações e os bastidores das minhas tentativas de construir um negócio remoto e lucrativo.
        </p>
        <p className="whitespace-normal">
          Como meu amigo por e-mail, você será o primeiro a saber sobre meus experimentos físicos, de negócios e mentais, e os resultados. Você também terá acesso a ofertas exclusivas e descontos em qualquer produto que eu lançar, não disponíveis em outros lugares.
        </p>
      </div>

    </div>
  );
}

