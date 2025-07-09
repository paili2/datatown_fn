import { KResource } from "../types";

export const kResourcesData: KResource[] = [
  {
    country_code: "KR",
    id: 1,
    name: "데이터베이스 서버",
    resource_type: "Database",
    status: "active",
    tags: ["production", "critical"],
    owner: {
      display_name: "김개발",
    },
  },
  {
    country_code: "US",
    id: 2,
    name: "웹 애플리케이션 서버",
    resource_type: "Web Server",
    status: "active",
    tags: ["production", "frontend"],
    owner: {
      display_name: "이디자인",
    },
  },
  {
    country_code: "JP",
    id: 3,
    name: "파일 스토리지",
    resource_type: "Storage",
    status: "inactive",
    tags: ["backup", "archive"],
    owner: {
      display_name: "박운영",
    },
  },
  {
    country_code: "KR",
    id: 4,
    name: "로드 밸런서",
    resource_type: "Load Balancer",
    status: "active",
    tags: ["production", "high-availability"],
    owner: {
      display_name: "최인프라",
    },
  },
  {
    country_code: "SG",
    id: 5,
    name: "캐시 서버",
    resource_type: "Cache",
    status: "active",
    tags: ["performance", "redis"],
    owner: {
      display_name: "정백엔드",
    },
  },
  {
    country_code: "KR",
    id: 6,
    name: "모니터링 서버",
    resource_type: "Monitoring",
    status: "inactive",
    tags: ["monitoring", "alerting"],
    owner: {
      display_name: "강데브옵스",
    },
  },
  {
    country_code: "US",
    id: 7,
    name: "백업 서버",
    resource_type: "Backup",
    status: "active",
    tags: ["backup", "disaster-recovery"],
    owner: {
      display_name: "윤보안",
    },
  },
  {
    country_code: "JP",
    id: 8,
    name: "개발 서버",
    resource_type: "Development",
    status: "active",
    tags: ["development", "testing"],
    owner: {
      display_name: "임개발자",
    },
  },
  {
    country_code: "KR",
    id: 9,
    name: "테스트 서버",
    resource_type: "Testing",
    status: "active",
    tags: ["testing", "qa"],
    owner: {
      display_name: "한테스터",
    },
  },
  {
    country_code: "SG",
    id: 10,
    name: "스테이징 서버",
    resource_type: "Staging",
    status: "inactive",
    tags: ["staging", "pre-production"],
    owner: {
      display_name: "조릴리즈",
    },
  },
];
