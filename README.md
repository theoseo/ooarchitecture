# ooarchitecture (formerly mjlee-draws)

같은 사이트 owner의 두 시기 활동 — 일러스트(2018-2019) → 건축(2022~) 콘텐츠 전환. Gatsby + Contentful 기반 정적 사이트.

## 라이브

- **현재**: https://ooarchitecture.co (건축 프로젝트 — Mies van der Rohe 참조 시리즈, "what-mies-told-me", "chair-6-0", "oo-stool" 등)
- **옛 도메인**: https://mjlee-draws.com (같은 사이트로 redirect)

## 시기 흐름

| 시기 | 콘텐츠 | 코드 변화 |
|---|---|---|
| 2018-07 ~ 2019-05 | **mjlee-draws** 일러스트 사이트 | Wordpress → Gatsby-Contentful 마이그레이션 (gatsby-contentful-starter 기반). theme 출처 [suhongs/mjlee-draws](https://github.com/suhongs/mjlee-draws) (옛 Wordpress 테마, 본인 작성) |
| 2021-09 | "update" | 의존성/설정 update |
| 2022-10 | **오오건축(ooarchitecture)으로 콘텐츠 전환** | 타이틀 "오오건축 - ooarchitecture", `gatsby-config.js` siteMetadata 변경, 메뉴 text-overflow elipsis, logo 신규 (`static/img/logo.{jpg,png}`) |

## 배포

- **Netlify** 연결 + Contentful webhook (콘텐츠 변경 시 자동 rebuild)
- Build env vars: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_DELIVERY_TOKEN`

## 정리 사정 (2026-05-17)

원래 같은 코드가 Bitbucket `osslab/mjlee` (라이브 source) + GitHub `theoseo/mjlee` (옛 publish 시점에서 멈춤) 두 곳에 있던 것을 GitHub로 합쳐 통합. 4 commits (2021-09 ~ 2022-10) GitHub master에 fast-forward sync. 이후 Netlify source를 GitHub로 switch하고 Bitbucket archive 예정.

## 개발

```bash
npm install
npm run dev     # Contentful Preview API로 로컬 미리보기
npm run build   # production build to ./public
```

`.contentful.json` 설정 필요 — `.contentful.json.sample` 참조.
