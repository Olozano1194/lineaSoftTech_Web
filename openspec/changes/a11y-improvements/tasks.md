# Tasks: Accessibility Improvements

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~30 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | ask-on-risk |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

## Phase 1: Dependency Setup

- [ ] 1.1 Install `eslint-plugin-jsx-a11y` as devDependency in `package.json` *(skipped per spec — no eslint plugin)*

## Phase 2: Layout & Navigation Landmarks

- [x] 2.1 Add `aria-label="Navegación principal"` to `<nav>` in `src/components/layout/Header.tsx`
- [x] 2.2 Change `alt="logo"` → `alt="LineaSoftTech"` in Header logo image
- [x] 2.3 Add `aria-label="Contenido principal"` to `<main>` in `src/layouts/LayoutAdmin.tsx`

## Phase 3: Footer Social Links

- [x] 3.1 Add `aria-label="LinkedIn"` and `aria-hidden="true"` to FaLinkedin in `src/components/layout/Footer.tsx`
- [x] 3.2 Add `aria-label="GitHub"` and `aria-hidden="true"` to FaGithub in Footer
- [x] 3.3 Add `aria-hidden="true"` to MdEmail and CiLocationOn icons in Footer

## Phase 4: UI Components (Cards & Buttons)

- [x] 4.1 Add `aria-hidden="true"` to Icon and FaCheck in `src/components/ui/ServiceCard.tsx`
- [x] 4.2 Add `aria-hidden="true"` to Icon and FaCheckCircle in `src/components/ui/PlanCard.tsx`
- [x] 4.3 Add `aria-hidden="true"` to MdOutlineChat in `src/components/ui/BtnPrice.tsx`
- [x] 4.4 Add `aria-hidden="true"` to FaExclamationTriangle in `src/components/ui/ErrorFallback.tsx`

## Phase 5: Section Components

- [x] 5.1 Add `aria-hidden="true"` to ArrowRightIcon, remove `data-alt` in `src/components/sections/HeroSection.tsx`
- [x] 5.2 Add `aria-hidden="true"` to MdArrowForwardIos in `src/components/sections/FAQSection.tsx`
- [x] 5.3 Change `alt="Team Work"` → descriptive alt in `src/components/sections/ProcessSection.tsx`
- [x] 5.4 Add `aria-hidden="true"` to MdOutlineEmail, MdOutlinePhone, MdOutlineCircle in `src/components/sections/ContactSection.tsx`
- [x] 5.5 Add `aria-hidden="true"` to MdAdsClick, MdVisibility, MdFavorite in `src/components/sections/about/MisionVisionSection.tsx`
- [x] 5.6 Add `aria-hidden="true"` to FaLightbulb, FaHandshake in `src/components/sections/about/HistorySection.tsx`

## Phase 6: Error Pages

- [x] 6.1 Add `aria-hidden="true"` to ExclamationTriangleIcon in `src/pages/Error404.tsx`

## Phase 7: Verification

- [x] 7.1 Run `npm run build` — 0 errors
- [ ] 7.2 Verify eslint-plugin-jsx-a11y loads without config errors *(skipped — no eslint plugin installed per spec)*
