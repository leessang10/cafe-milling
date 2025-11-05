import Image from "next/image";
import { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "아보카도 토스트",
    description: "신선한 아보카도와 수란을 얹은 건강한 브런치",
    price: "12,000원",
    imageSrc:
      "https://images.unsplash.com/photo-1609158087148-3bae840bcfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYyMjU5MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "아보카도와 수란을 곁들인 토스트 한 접시",
  },
  {
    id: "2",
    name: "베리 팬케이크",
    description: "계절 베리와 메이플 시럽을 곁들인 플러피 팬케이크",
    price: "13,500원",
    imageSrc:
      "https://images.unsplash.com/photo-1572269608529-3fe02ee4a4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGJlcnJpZXMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYyMjg1Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "베리와 메이플 시럽이 올려진 팬케이크",
  },
  {
    id: "3",
    name: "에그 베네딕트",
    description: "클래식한 브런치의 정석, 올란데즈 소스와 함께",
    price: "14,000원",
    imageSrc:
      "https://images.unsplash.com/photo-1638062401890-54c826f3efe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwYmVuZWRpY3QlMjBicnVuY2h8ZW58MXx8fHwxNzYyMzE4NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "올란데즈 소스를 뿌린 에그 베네딕트",
  },
  {
    id: "4",
    name: "시그니처 라떼",
    description: "매일 로스팅하는 원두로 만든 부드러운 라떼",
    price: "5,500원",
    imageSrc:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjIyNDQ0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "라떼 아트를 올린 따뜻한 커피",
  },
  {
    id: "5",
    name: "스무디볼",
    description: "신선한 과일과 그래놀라로 완성한 건강한 한 끼",
    price: "11,000원",
    imageSrc:
      "https://images.unsplash.com/photo-1675962292427-062dc596171e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBmcnVpdHxlbnwxfHx8fDE3NjIzMTg1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "다양한 과일과 그래놀라가 담긴 스무디볼",
  },
  {
    id: "6",
    name: "브런치 플레이트",
    description: "카페 밀링의 베스트 메뉴를 한 접시에",
    price: "16,000원",
    imageSrc:
      "https://images.unsplash.com/photo-1670710029405-ad968b51b6dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuY2glMjBicmVha2Zhc3QlMjBjYWZlfGVufDF8fHx8MTc2MjIyMTY3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "다양한 사이드를 담은 브런치 플레이트",
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
