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
                경기도 수원시 팔달구 화서문로71번길 14, 1층 (카페 밀링)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">대중교통</h3>
              <div className="mt-1 space-y-2 text-sm text-brown/75">
                <p>
                  <span className="font-semibold text-brown">버스 정류장</span>
                  <br />
                  장안문·수원전통문화관 (01-155 / 01-153)
                </p>
                <p>
                  <span className="font-semibold text-brown">지하철</span>
                  <br />
                  수원역(1호선/수인분당선):
                  <br /> 수원역.AK플라자 정류장에서 버스 환승 후
                  <br /> 장안문·수원전통문화관 정류장 하차
                  <br />
                  화서역(1호선):
                  <br />화서역 정류장에서 3번, 8번 버스 승차 후
                  <br />장안문·수원전통문화관 하차
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">주차 안내</h3>
              <p className="mt-1 text-sm text-brown/75">
                건물 1층 (총 4대). 공간이 협소하니 인근 공영주차장을 이용해 주세요.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-brown/10 shadow-soft">
            <iframe
              title="카페 밀링 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.3681243841015!2d127.01576969999998!3d37.2864083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5ccb02917a6d%3A0xf59e9cf7f7139cc8!2z6rK96riw64-EIOyImOybkOyLnCDtjJTri6zqtawg7ZmU7ISc66y466GcNzHrsojquLggMTQ!5e0!3m2!1sko!2skr!4v1762320527059!5m2!1sko!2skr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-100 w-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
