export const MapSection = () => {
  return (
    <section
      id="location"
      aria-labelledby="map-heading"
      className="bg-cream"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brown/70">
            Visit Us
          </p>
          <h2
            id="map-heading"
            className="text-3xl font-bold text-brown sm:text-4xl"
          >
            오시는 길
          </h2>
          <p className="text-base text-brown/70">
            편안한 브런치 타임을 위해 카페 밀링으로 바로 찾아오세요.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-4 rounded-3xl border border-brown/10 bg-white p-8 shadow-soft text-brown">
            <div>
              <h3 className="text-lg font-semibold">주소</h3>
              <p className="mt-1 text-sm text-brown/75">
                서울 어딘가 123, 1층 (카페 밀링)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">대중교통</h3>
              <p className="mt-1 text-sm text-brown/75">
                지하철 2호선 카페역 3번 출구 도보 5분. 버스 123, 456, 789
                이용시 카페 밀링 정류장에서 하차.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">주차 안내</h3>
              <p className="mt-1 text-sm text-brown/75">
                건물 지하 1층 주차장 이용 가능 (1시간 무료).
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-brown/10 shadow-soft">
            <iframe
              title="카페 밀링 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.764342102483!2d127.02758397602558!3d37.49960197206998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14a382d4b61%3A0xd5db26d0f4dd6a76!2z7ISc7Jq47Yq567OE7IucIOyKpOumrOuvvOumrA!5e0!3m2!1sko!2skr!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
