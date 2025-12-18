"use client";

import { scrollToId } from "@/lib/scroll";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = (target: string) => () => {
    scrollToId(target);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const tryPlay = () => {
      video.play().catch(() => {
        /* Ignore autoplay errors; some browsers need a retry */
      });
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden text-brown"
      aria-labelledby="hero-heading"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
        poster="/photo/카페밀링_천장모빌_빨강분홍_디테일.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/video/acryl-woom.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#f5efe6] via-[#f5efe6cc] to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-brown/60">
          Cafe Milling
        </p>
        <h1
          id="hero-heading"
          className="text-5xl font-bold leading-tight text-brown sm:text-6xl md:text-7xl"
        >
          엄마의 마음을 담아 차린 한 상
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-xl text-brown/85 sm:text-2xl">
            집밥이 생각나는 브런치
          </p>
          <p className="text-sm text-brown/60 sm:text-base">
            Home-cooked comfort, lovingly prepared
          </p>
        </div>
        <button
          type="button"
          onClick={handleScroll("today-brunch")}
          className="mt-4 rounded-full bg-brown px-10 py-4 text-base font-semibold text-cream shadow-lg transition-all hover:bg-brown-dark hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
        >
          오늘의 메뉴 보기
        </button>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-brown/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
