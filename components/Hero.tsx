"use client";

import { scrollToId } from "@/lib/scroll";

export const Hero = () => {
  const handleScroll = (target: string) => () => {
    scrollToId(target);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-hero-pattern text-brown"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#f5efe6] via-[#f5efe6cc] to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center sm:items-start sm:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-brown/70">
          Cafe Milling
        </p>
        <h1
          id="hero-heading"
          className="text-4xl font-bold leading-tight text-brown sm:text-5xl md:text-6xl"
        >
          카페 밀링 — 브런치와 커피가 가장 맛있는 시간
        </h1>
        <p className="max-w-2xl text-lg text-brown/80 sm:text-xl">
          매일 아침 직접 준비하는 브런치와 신선한 원두를 만나보세요.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleScroll("today-brunch")}
            className="rounded-full bg-brown px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brown-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
          >
            오늘의 브런치
          </button>
          <button
            type="button"
            onClick={handleScroll("location")}
            className="rounded-full border border-brown px-6 py-3 text-sm font-semibold text-brown transition-colors hover:bg-brown/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
          >
            오시는 길
          </button>
        </div>
      </div>
    </section>
  );
};
