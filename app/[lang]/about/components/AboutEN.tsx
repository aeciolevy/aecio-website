import Link from "next/link";
import { Links } from "../../enums/links";

export const AboutEN = () => {
  return (
    <div className="flex flex-col lg:space-y-8 space-y-12 text-center">
      <h1 className="text-center text-2xl lg:text-5xl">
        Hi, I'm <strong className="font-dancing"> Aécio </strong>
      </h1>

      <h1 className="font-medium text-2xl lg:text-4xl">
        The short version
      </h1>
      <div className="w-full space-y-2 text-xl font-light text-left lg:w-9/12 xl:w-6/12 mx-auto my-8">
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">I am an electrical engineer and currently work as a software engineer</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">I was born in Campina Grande, Brazil where I spent most of my life</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">I ran a <a className="underline text-orange-500" href={Links.YOUTUBE}>YouTube channel about Vaquejada</a> for a few years</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">I am really into human performance, entrepreneurship, and remote business</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">I play guitar, and I <Link className="underline text-orange-500" href="/compositions">write songs</Link></p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="whitespace-normal">I spend most of my spare time reading books and lifting weights in Canada. While in Brazil, I will be riding a horse or competing in Vaquejada most of the time.</p>
        </div>
      </div>

      <h1 className="font-medium text-2xl lg:text-4xl">
        Tipping in the unknown
      </h1>
      <div className="w-full text-xl font-light space-y-4 text-left lg:w-9/12 xl:w-6/12 mx-auto my-8">
        <p className="whitespace-normal">
          One of my strongest life goals is to build a business with true value for others and that allows me to do what I love, while I have the physical condition to do so (preferably a young rich than an old one).
        </p>
        <p className="whitespace-normal">
          This intense desire probably came from one phrase from my granddad that I could not forget: "I don't want a retirement plan, if what I spent my life building did not support me when I am old, I failed."
        </p>
        <p className="whitespace-normal">
          This has stuck with me since I was ten years old. It has grown stronger in the past years. I have a slight modification to my granddad's philosophy that we should run a business that supports us during the early ages when we still have the energy to enjoy more of the power of money.
        </p>
      </div>

      <h1 className="font-medium text-2xl lg:text-4xl">
        Want to stay in touch
      </h1>
      <div className="w-full text-xl font-light space-y-4 text-left lg:w-9/12 xl:w-6/12 mx-auto my-8">
        <p className="whitespace-normal">
          The best way to connect with me, and follow my work, is via my newsletter.
        </p>
        <p className="whitespace-normal">
          I send one out most weeks, sharing my learning in what I am working on currently, as well as reflections, inspirations, and behind-the-scenes from my attempts to have a remote and profitable business.
        </p>
        <p className="whitespace-normal">
          As my email friend, you’ll be the first to know about my experiments in physical, business, and mental things I am doing and the results. You'll also get exclusive deals and discounts on any product I launch, not available anywhere.
        </p>
      </div>
    </div>
  );
}

