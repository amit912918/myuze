import { NextResponse } from 'next/server';

export function middleware(request: any) {
    const isLoggedIn = false; // Replace with real auth check

    if (request.nextUrl.pathname.startsWith('/dashboard') && !isLoggedIn) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard'],
};
