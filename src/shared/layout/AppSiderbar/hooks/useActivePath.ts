import { useCallback } from 'react';
import { usePathname } from 'next/navigation';

export const useActivePath = () => {
  const pathname = usePathname();
  return useCallback((path: string) => path === pathname, [pathname]);
};
