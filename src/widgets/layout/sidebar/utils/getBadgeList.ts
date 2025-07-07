import { BadgeInfo } from "../types";

export function getBadgeList(isOngoing: boolean, isPro: boolean): BadgeInfo[] {
  return [
    { flag: isOngoing, label: "참여중" },
    { flag: isPro, label: "완료" },
  ];
}
