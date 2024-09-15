import Link from "next/link";
import { allLetters } from "content-collections";
import { sortDescending } from "@/app/lib/parseDate";

export function BlogPT(): JSX.Element {
  const sortedByLastModified = allLetters.sort(sortDescending);

  return (
    <div className="w-full pt-4">
      <div>
        <h1 className="text-3xl font-medium text-white text-center tracking-[0.36px] leading-[normal]">
          Lista das últimas cartas
        </h1>
        <p className="p-4 text-[#858a96] text-lg text-center tracking-[0.22px] leading-[normal]">
          Explorar o potencial individual, negócios remotos e aproveitar a vida.
        </p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:justify-items-center items-center gap-4 lg:gap-12 lg:px-20 px-2">
          {sortedByLastModified.map((letter) => (
            <div key={letter._meta.path} className="rounded">
              <img
                className="aspect-video rounded object-fit"
                alt="Unsplash bas"
                src={letter.thumbnail}
              />
              <div className="mt-4 inline-flex flex-col gap-4 items-start">
                <p className="relative w-[288px] mt-[-1.00px] font-medium text-white text-[18px] tracking-[0.18px] leading-[normal]">
                  {letter.title}
                </p>
                <p className="relative w-[295px] font-normal text-[#757985] text-[14px] tracking-[0.14px] leading-[normal]">
                  {letter.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row justify-center mt-4">
          <Link href="/blog">
            <button className="px-8 py-4 w-fit font-normal hover:text-primary-500 text-white tracking-[0] leading-[normal] rounded overflow-hidden border border-solid hover:border-primary-500 border-white">
              Ler conteudo do Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

