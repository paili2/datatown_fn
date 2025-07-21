import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /partners, /kresource, /projects로 접근하면 각각 /dashboard로 리다이렉트
  if (pathname === '/partners') {
    return NextResponse.redirect(new URL('/partners/dashboard', request.url));
  }
  if (pathname === '/k-resources') {
    return NextResponse.redirect(new URL('/k-resources/dashboard', request.url));
  }
  if (pathname === '/projects') {
    return NextResponse.redirect(new URL('/projects/dashboard', request.url));
  }
  if (pathname === '/managements') {
    return NextResponse.redirect(new URL('/managements/internal-accounts', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/partners', '/k-resources', '/projects', '/managements'],
};
