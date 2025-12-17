import Image from "next/image";
import { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "밀링 쌈밥 브런치",
    description:
      "매콤하게 불맛나는 제육과 신선한 쌈, 정갈한 반찬이 어우러진 밀링 시그니처 브런치",
    price: "14,900원",
    imageSrc: "/menu/밀링_쌈밥_브런치.jpeg",
    imageAlt: "밀링 쌈밥 브런치",
  },
  {
    id: "2",
    name: "밀링 김치볶음밥",
    description:
      "잘 익은 김치의 감칠맛을 살려 고슬고슬 볶아낸 엄마가 만들어주는 대표 집밥메뉴",
    price: "12,900원",
    imageSrc: "/menu/밀링_김치볶음밥.jpeg",
    imageAlt: "밀링 김치볶음밥",
  },
  {
    id: "3",
    name: "밀링 칼국수",
    description:
      "담백하고 깔끔한 국물로 속을 따뜻하게 데워주는 겨울 시즌 한정 메뉴",
    price: "10,900원",
    imageSrc: "/menu/밀링_칼국수.jpeg",
    imageAlt: "밀링 칼국수",
  },
  {
    id: "4",
    name: "밀링 프렌치토스트",
    description:
      "어렸을 때 엄마가 식빵에 계란물을 입혀 구워주던, 추억을 담은 달콤한 토스트",
    price: "11,900원",
    imageSrc: "/menu/밀링_프렌치토스트.jpeg",
    imageAlt: "밀링 프렌치토스트",
  },
];

export const MenuGrid = () => {
  return (
    <section
      id="today-brunch"
      aria-labelledby="menu-heading"
      className="bg-cream"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brown/70">
            Main Meal
          </p>
          <h2
            id="menu-heading"
            className="text-3xl font-bold text-brown sm:text-4xl"
          >
            메인 메뉴
          </h2>
          <div className="space-y-1 text-base text-brown/70">
            <p>카페밀링의 모든 메뉴는 엄마의 마음을 담아 정성껏 준비됩니다.</p>
            <p>
              All of Cafe Milling&apos;s dishes are lovingly prepared with a mother&apos;s warm
              touch.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {menuItems.map((item, index) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-brown/10 bg-white shadow-soft transition-transform hover:-translate-y-1 focus-within:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index < 2}
                  quality={85}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-brown">
                    {item.name}
                  </h3>
                  <span className="text-sm font-medium text-brown/70">
                    {item.price}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-brown/70">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
