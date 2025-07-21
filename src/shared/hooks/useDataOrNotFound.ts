import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 데이터가 없을 때 404 페이지로 리다이렉트하는 훅
 * @param data - 확인할 데이터
 * @param isLoading - 로딩 상태 (선택사항)
 * @param redirectPath - 리다이렉트할 경로 (기본값: '/not-found')
 */
export const useDataOrNotFound = <T>(data: T | null | undefined, isLoading?: boolean, redirectPath: string = '/not-found') => {
  const router = useRouter();

  useEffect(() => {
    // 로딩 중이 아니고 데이터가 없는 경우에만 리다이렉트
    if (!isLoading && (data === null || data === undefined)) {
      router.push(redirectPath);
    }
  }, [data, isLoading, router, redirectPath]);

  return {
    data,
    isLoading,
    isNotFound: !isLoading && (data === null || data === undefined),
  };
};
