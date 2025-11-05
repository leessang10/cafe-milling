import Image from "next/image";
import { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  {
    id: "brunch-1",
    name: "시그니처 프렌치 토스트",
    description: "바닐라 크림과 제철 과일이 어우러진 프렌치 토스트",
    price: "₩14,000",
    imageSrc: "https://placehold.co/400x300?text=French+Toast",
    imageAlt: "시그니처 프렌치 토스트",
  },
  {
    id: "brunch-2",
    name: "밀링 모닝 플래터",
    description: "스크램블 에그, 베이컨, 홈메이드 잼과 버터",
    price: "₩16,500",
    imageSrc: "https://placehold.co/400x300?text=Morning+Platter",
    imageAlt: "밀링 모닝 플래터",
  },
  {
    id: "brunch-3",
    name: "크림 머쉬룸 파스타",
    description: "트러플 향을 더한 진한 크림 파스타",
    price: "₩15,500",
    imageSrc: "https://placehold.co/400x300?text=Mushroom+Pasta",
    imageAlt: "크림 머쉬룸 파스타",
  },
  {
    id: "brunch-4",
    name: "콜드브루 하모니",
    description: "직접 로스팅한 원두로 내린 콜드브루",
    price: "₩6,500",
    imageSrc: "https://placehold.co/400x300?text=Cold+Brew",
    imageAlt: "콜드브루 하모니",
  },
  {
    id: "brunch-5",
    name: "라임 에이드",
    description: "상큼한 라임과 민트가 어우러진 시그니처 에이드",
    price: "₩6,000",
    imageSrc: "https://placehold.co/400x300?text=Lime+Aid",
    imageAlt: "라임 에이드",
  },
  {
    id: "brunch-6",
    name: "너츠 브라우니",
    description: "고소한 견과류와 진한 초콜릿 브라우니",
    price: "₩5,500",
    imageSrc: "https://placehold.co/400x300?text=Brownie",
    imageAlt: "너츠 브라우니",
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
            Signature Menu
          </p>
          <h2
            id="menu-heading"
            className="text-3xl font-bold text-brown sm:text-4xl"
          >
            오늘의 브런치 추천
          </h2>
          <p className="text-base text-brown/70">
            부드러운 브런치와 향긋한 커피를 취향에 맞게 즐겨보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
