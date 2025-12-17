"use client";

import { useState } from "react";
import Image from "next/image";

const galleryPhotos = [
  {
    id: 1,
    src: "/photo/카페밀링_외부_모던건물_정면전경.jpg",
    alt: "카페 밀링 외부 전경",
  },
  {
    id: 2,
    src: "/photo/카페밀링_실내_중앙복도_크리스마스_전경.jpg",
    alt: "따뜻한 실내 분위기",
  },
  {
    id: 3,
    src: "/photo/카페밀링_창가좌석_밝은낮_외부전경.jpg",
    alt: "창가 좌석의 자연광",
  },
  {
    id: 4,
    src: "/photo/카페밀링_카운터_전경_장비.jpg",
    alt: "커피 설비와 카운터",
  },
  {
    id: 5,
    src: "/photo/카페밀링_천장모빌_빨강분홍_디테일.jpg",
    alt: "천장 모빌 디자인 디테일",
  },
  {
    id: 6,
    src: "/photo/카페밀링_입구_나무벤치_크리스마스트리.jpg",
    alt: "환영하는 입구와 크리스마스 트리",
  },
  {
    id: 7,
    src: "/photo/카페밀링_빨간테이블_흰의자_줄세움.jpg",
    alt: "좌석 전망",
  },
  {
    id: 8,
    src: "/photo/카페밀링_외부_한옥골목_전경.jpg",
    alt: "한옥 골목의 카페",
  },
  {
    id: 9,
    src: "/photo/카페밀링_좌석_대형창문_트리_사선뷰.jpg",
    alt: "공간의 깊이감",
  },
  {
    id: 10,
    src: "/photo/카페밀링_나무벤치_입구_근접_전경.jpg",
    alt: "아늑한 입구 코너",
  },
  {
    id: 11,
    src: "/photo/카페밀링_중앙_크리스마스트리_야경.jpg",
    alt: "저녁의 따뜻한 분위기",
  },
  {
    id: 12,
    src: "/photo/카페밀링_천장모빌_노랑빨강_반사클로즈업.jpg",
    alt: "예술적 디테일",
  },
];

export const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev > 0 ? prev - 1 : galleryPhotos.length - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) =>
      prev < galleryPhotos.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section
      id="gallery"
      className="bg-deep-cream"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brown/70">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="text-3xl font-bold text-brown sm:text-4xl"
          >
            카페 밀링의 공간
          </h2>
          <p className="mt-3 text-brown/70">
            따뜻하고 아늑한 분위기에서 여유로운 시간을 보내세요
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
              aria-label={`${photo.alt} 확대 보기`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                quality={80}
              />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="이미지 확대 보기"
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 text-4xl text-white transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="닫기"
            >
              ×
            </button>
            <div className="relative h-[80vh] w-[90vw]">
              <Image
                src={galleryPhotos[currentImage].src}
                alt={galleryPhotos[currentImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
                quality={90}
              />
            </div>
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-5xl text-white transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="이전 이미지"
            >
              ‹
            </button>
            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-5xl text-white transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="다음 이미지"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
