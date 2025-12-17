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
      className="bg-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brown/70">
            Hours & Notice
          </p>
          <h2
            id="hours-heading"
            className="text-3xl font-bold text-brown sm:text-4xl"
          >
            운영 시간 & 안내
          </h2>
          <p className="text-base text-brown/70">
            편안한 시간을 위해 방문 전 운영 시간을 확인해주세요.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-brown/10 bg-cream p-8 shadow-soft">
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
          <div className="grid gap-4">
            {notices.map((notice) => (
              <div
                key={notice.title}
                className="rounded-3xl border border-brown/10 bg-cream px-6 py-5 text-left shadow-soft"
              >
                <h3 className="text-base font-semibold text-brown">
                  {notice.title}
                </h3>
                <p className="mt-1 text-sm text-brown/75">
                  {notice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
