// components/ListHeader.tsx
"use client";

export interface PendingPartnersHeaderProps {
  title?: string;
  className?: string;
}

export default function PendingPartnersHeader({
  title = "Pending Partners",
  className = "",
}: PendingPartnersHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 ${className}`}
    >
      <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white/90">
        {title}
      </h3>
    </div>
  );
}
