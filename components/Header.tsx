"use client";

import Link from "next/link";
import Image from "next/image";
import type { MouseEvent } from "react";
import { scrollToId } from "@/lib/scroll";

const navigation = [
  { label: "메뉴", href: "#today-brunch" },
  { label: "갤러리", href: "#gallery" },
  { label: "오시는 길", href: "#location" },
];

export const Header = () => {
  const handleInternalNav =
    (hash: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    const isHashLink = hash.startsWith("#");
    if (!isHashLink) return;

    event.preventDefault();
    const id = hash.replace("#", "");
    scrollToId(id);
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-cream/95 backdrop-blur border-b border-brown/10">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="#top"
            onClick={handleInternalNav("#top")}
            className="transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
          >
            <Image
              src="/logo/cafemilling_logo.svg"
              alt="카페 밀링"
              width={120}
              height={40}
              priority
              className="h-8 w-auto sm:h-10"
            />
          </Link>
          {/*<Image*/}
          {/*  src="/logo/cafemilling_logo3.svg"*/}
          {/*  alt="카페 밀링"*/}
          {/*  width={80}*/}
          {/*  height={24}*/}
          {/*  className="h-5 w-auto opacity-60 sm:h-6"*/}
          {/*/>*/}
        </div>
        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-3 sm:gap-6 text-sm font-medium text-brown">
            {navigation.map(({ label, href, external }) => (
              <li key={href}>
                {external ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-3 py-2 transition-colors hover:bg-brown/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
                  >
                    {label}
                  </Link>
                ) : (
                  <Link
                    href={href}
                    onClick={handleInternalNav(href)}
                    className="rounded-full px-3 py-2 transition-colors hover:bg-brown/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
