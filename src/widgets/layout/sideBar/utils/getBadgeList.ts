export type BadgeInfo = { flag: boolean; label: "참여중" | "pro" };

export function getBadgeList(
  isOngoing: boolean,
  isPro: boolean
): BadgeInfo[] {
  return [
    { flag: isOngoing, label: "참여중" },
    { flag: isPro, label: "pro" },
  ];
}