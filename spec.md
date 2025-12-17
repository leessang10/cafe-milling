“처음부터 프로젝트 생성”용

다음 요구사항을 모두 만족하는 Vite + React + TypeScript + Tailwind 기반의 단일 페이지(SPA) 랜딩 사이트 전체 코드를 생성해줘. 프로젝트명은 cafe-milling. 배포 대상은 Vercel.

브랜드 정보
•	사이트명: 카페 밀링 (Cafe Milling)
•	설명: 브런치 카페
•	기본 언어: ko-KR
•	컬러 톤: 크림‧베이지(배경), 진갈색(텍스트/포인트)
•	폰트: Pretendard(웹폰트), 시스템 폰트 폴백

페이지 구성 (메인 1페이지만)

반응형 레이아웃(모바일 우선)으로 다음 섹션을 포함:
1.	헤더/내비게이션
•	좌측 로고(텍스트 로고면 OK), 우측에 “메뉴(스크롤 이동)”, “오시는 길”, “인스타그램” 링크
•	상단 고정(sticky)
2.	히어로 섹션
•	브랜드 한 줄 카피: “카페 밀링 — 브런치와 커피가 가장 맛있는 시간”
•	서브 카피: “매일 아침 직접 준비하는 브런치와 신선한 원두를 만나보세요.”
•	주요 CTA 버튼 2개: “오늘의 브런치”(#today-brunch로 스크롤), “오시는 길”(지도 섹션으로 스크롤)
•	배경 이미지는 public/hero.jpg를 사용(없으면 색상 블록으로 대체)
3.	시그니처 메뉴 하이라이트 섹션(#today-brunch)
•	3~6개 카드 그리드(모바일 1열 → 태블릿 2열 → 데스크톱 3열)
•	각 카드: 이미지(플레이스홀더), 메뉴명, 짧은 설명, 가격
4.	운영 시간 & 안내 섹션
•	영업시간 표(예: “평일 10:00–20:00 / 주말 09:00–21:00”), 라스트오더, 휴무일 안내
•	알러지/원두 정보 등 간단 공지 블록
5.	위치/지도 섹션
•	카페 주소(플레이스홀더)와 교통편 안내
•	지도 임베드(예: 카카오맵/구글맵 iframe, 더미 좌표 가능)
6.	푸터(하단 고정 아님)
•	업체 정보: 상호명, 사업자등록번호, 대표자, 주소
•	연락처: 전화, 이메일
•	소셜: 인스타그램 링크
•	저작권 표시

기술/품질 요구사항
•	프로젝트 스캐폴드: pnpm create vite → react-ts 템플릿 가정, @vitejs/plugin-react 포함
•	스타일: TailwindCSS 설정(content 경로 정확), 기본 유틸리티만 사용
•	접근성: 시맨틱 태그(header/main/footer/nav/section), 대체 텍스트, 명확한 포커스 스타일
•	SEO/메타: index.html에 title/description/og 태그, favicon, og 이미지(/og.png)
•	라우팅: SPA로 한 페이지만, 내부 스크롤 이동(anchor 링크)
•	성능: 이미지 loading="lazy", 적절한 alt 속성, 폰트 최적화
•	Vercel: 루트에 vercel.json 추가해 SPA 리라이트
•	코드 품질: TS 사용, 컴포넌트 분리(src/components/*), 유틸/타입 폴더 분리

파일 구조 예시

cafe-milling/
public/
hero.jpg       # 없으면 생성하지 말고 배경색 처리
og.png
favicon.ico
index.html
vercel.json
tailwind.config.js
postcss.config.js
tsconfig.json
vite.config.ts
src/
main.tsx
index.css
types/index.ts
lib/scroll.ts
components/
Header.tsx
Hero.tsx
MenuGrid.tsx
HoursNotice.tsx
MapSection.tsx
Footer.tsx
App.tsx

푸터에 채워 넣을 기본 값(플레이스홀더, 코드에 하드코딩)
•	상호명: 카페 밀링
•	사업자등록번호: 000-00-00000
•	대표자: 김정은
•	주소: 경기도 수원시 팔달구 화서문로71번길 14
•	Instagram: https://www.instagram.com/cafe_milling/

산출물
•	위 구조 전체 파일의 실제 코드.
•	주요 컴포넌트에 간단 주석.
•	README.md에 로컬 실행/빌드/배포(pnpm, Vercel) 안내.
