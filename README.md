# Feature-Sliced Design (FSD)

## 📋 계층별 분류표

| 계층명       | 저장소 경로   | 주요 책임 (Responsibility)                               | 포함 예시                           | 공식 명칭 / 설명                                         | 실무 팁                                                    |
| ------------ | ------------- | -------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| **entities** | `entities/_/` | 비즈니스 도메인 핵심 데이터 모델                         | User, Product, Post, Admin          | Domain Entity, Data Model<br>도메인 기반, 재사용 빈도 ↑  | DB 모델과 1:1 매핑되는 경우가 많으니 도메인 중심 설계 필수 |
| **widgets**  | `widgets/_/`  | 여러 entities/feature를 조합한 재사용 가능한 UI 블록     | ListView, CardGroup, Table, Form    | Widget, Section, Block<br>뷰의 최소 조합 단위            | 디자인 시스템의 ‘조합 블록’으로 관리해 일관성 유지         |
| **features** | `features/_/` | 사용자 관점의 단일 비즈니스 기능                         | LikeButton, SearchBar, Auth, Filter | Business Feature, Slice, Action<br>단일 책임 & 상태 보유 | UX 목적별로 분리해 테스트·유지보수 용이                    |
| **shared**   | `shared/_/`   | 도메인·feature에 종속되지 않는 범용 컴포넌트 및 유틸리티 | Button, Icon, util, Hook, Style     | Shared UI, Utility, Lib, Hook<br>프로젝트 전역 공용      | 의존성 최소화 → 전역 관리로 재사용성 극대화                |

---

## 🔍 계층별 해설

### 1. entities

- **설명**: 앱의 핵심 데이터 구조와 도메인 로직 담당
- **포함**: 타입/모델, API 호출, 도메인 유틸, 도메인 전용 훅, 상태 관리
- **예시**: `User`, `Post`, `Admin`, `Product`
- **팁**: 엔티티를 도메인 언어(Ubiquitous Language)로 명확히 정의하면, 백엔드 DB 모델과 자연스럽게 매핑됩니다.

### 2. widgets

- **설명**: 여러 엔티티와 피처를 결합해 만든 재사용 가능한 UI 블록
- **포함**: 리스트 뷰, 테이블, 대시보드 카드, 검색 결과 그룹 등
- **예시**: `UserTable`, `ProductListView`, `AdminSummaryPanel`
- **팁**: 디자인 시스템 내 ‘조합 블록’으로 관리하면, 시각적 일관성과 개발 생산성을 동시에 확보할 수 있습니다.

### 3. features

- **설명**: 하나의 사용자 액션 또는 비즈니스 로직을 캡슐화한 단위
- **포함**: 좋아요 버튼, 검색 입력, 인증 처리, 필터링 로직 등
- **예시**: `LikeButton`, `SearchBar`, `UserAuth`, `AdminInvite`
- **팁**: 상태와 이벤트를 해당 피처가 담당하게 설계하면, 관심사 분리가 명확해져 유지보수가 쉬워집니다.

### 4. shared

- **설명**: 도메인·피처에 종속되지 않는 범용 컴포넌트 및 유틸리티 모음
- **포함**: 버튼, 입력 컴포넌트, 아이콘, 컬러셋, 유틸 함수, 전역 훅 등
- **예시**: `Button`, `Input`, `Modal`, `formatDate`, `useDebounce`
- **팁**: 의존성이 없으므로 프로젝트 전역에서 자유롭게 재사용할 수 있으며, 테스트 비용도 낮춥니다.

---

## 🔎 실무 적용 판단법

- **entities**: 핵심 명사(비즈니스 객체) / DB 모델
- **widgets**: 복수 개의 entities·features를 조합한 ‘섹션’ 또는 ‘그룹’
- **features**: 단일 동사(유저 액션) 기반의 비즈니스 로직
- **shared**: 범용 재료(버튼·유틸) / 도메인·피처에 독립적

---

## 📌 표현 요약

- **entities**: “이름(명사) + 구조”
- **widgets**: “섹션 / 그룹 / 조합”
- **features**: “기능(동사) / 액션”
- **shared**: “재료(버튼/유틸) / 글로벌”
