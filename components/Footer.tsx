import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="bg-deep-cream text-brown"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-md">
            <h2
              id="footer-heading"
              className="text-lg font-semibold text-brown"
            >
              카페 밀링
            </h2>
            <p className="mt-3 text-sm text-brown/75">
              브런치와 커피가 가장 맛있는 시간, 카페 밀링에서 느껴보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-brown">
                업체 정보
              </h3>
              <p>사업자등록번호: 000-00-00000</p>
              <p>대표자: 홍길동</p>
              <p>주소: 서울 어딘가 123, 1층</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-brown">연락처</h3>
              <p>전화: 02-000-0000</p>
              <p>이메일: hello@cafemilling.kr</p>
              <Link
                href="https://instagram.com/cafemilling"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brown underline-offset-4 transition-colors hover:text-brown-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
              >
                Instagram 바로가기
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-brown/10 pt-6 text-sm text-brown/60">
          © {new Date().getFullYear()} 카페 밀링. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
