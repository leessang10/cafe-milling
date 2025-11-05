# Cafe Milling

카페 밀링의 반응형 브런치 카페 랜딩 페이지입니다. Next.js(App Router)와 TailwindCSS를 사용해 구축했으며, Vercel 배포를 가정합니다.

## 기술 스택
- Next.js 15 (App Router, React 19)
- TypeScript
- TailwindCSS 4

## 로컬 개발
```bash
pnpm install
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 프로덕션 빌드
```bash
pnpm build
pnpm start
```

`pnpm start`는 빌드 산출물을 기반으로 프로덕션 서버를 구동합니다.

## 코드 품질
- `pnpm lint`로 ESLint를 실행할 수 있습니다.

## 배포 (Vercel)
1. [Vercel CLI](https://vercel.com/docs/cli)를 설치합니다.
2. `vercel login`으로 로그인합니다.
3. 프로젝트 루트에서 `vercel`을 실행해 새 프로젝트를 연결하거나 기존 프로젝트에 링크합니다.
4. 이후 `vercel --prod`로 프로덕션 배포를 진행합니다.

루트의 `vercel.json`은 SPA 라우팅을 위한 리라이트 설정을 포함합니다.
