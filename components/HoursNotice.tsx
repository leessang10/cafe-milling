import { Notice } from "@/types";

const notices: Notice[] = [
  {
    title: "라스트 오더",
    description: "모든 메뉴 라스트오더 19:00",
  },
  {
    title: "원두 정보",
    description: "콜롬비아, 에티오피아 블렌드 - 주 1회 로스팅",
  },
  {
    title: "알레르기 안내",
    description: "견과류 및 유제품을 포함한 메뉴가 있습니다.",
  },
];

export const HoursNotice = () => {
  return (
    <section
      aria-labelledby="hours-heading"
      className="bg-cream"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-20">
        {/* Header */}
        <div className="flex flex-col gap-3 text-center">
          <h2
            id="hours-heading"
            className="text-3xl font-bold text-brown sm:text-4xl"
          >
            잠시 쉬어가세요
          </h2>
          <p className="text-base text-brown/70">
            따뜻한 한 끼와 함께 여유로운 시간을 보내실 수 있습니다
          </p>
        </div>

        {/* Operating Hours */}
        <div className="border-b border-brown/10 pb-8">
          <dl className="grid gap-4 text-brown">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <dt className="text-lg font-semibold">운영 시간</dt>
              <dd className="text-base text-brown/80">매일 11:00 – 20:00</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <dt className="text-lg font-semibold">정기 휴무</dt>
              <dd className="text-base text-brown/80">매주 월요일</dd>
            </div>
          </dl>
        </div>

        {/* Notices */}
        <div className="flex flex-col">
          {notices.map((notice, index) => (
            <div
              key={notice.title}
              className={`py-6 text-left ${
                index !== notices.length - 1 ? "border-b border-brown/10" : ""
              }`}
            >
              <h3 className="text-base font-semibold text-brown">
                · {notice.title}
              </h3>
              <p className="mt-2 text-sm text-brown/75">
                {notice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
