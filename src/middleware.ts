import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { authRoutes, protectedRoutes, publicRoutes } from "./lib/routes";


export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const user = await auth.getSessionUser();

    const isPublicRoute = publicRoutes.includes(path)
    const isProtectedRoute = protectedRoutes.includes(path)
    const isAuthRoute = authRoutes.includes(path)

    if (isPublicRoute) {
        return NextResponse.next();
    }


    if (isProtectedRoute) {
        if (!user) {
            return NextResponse.redirect(new URL("/login", req.nextUrl));
        }
        return NextResponse.next();
    }


    if (isAuthRoute) {
        if (user) {
            return NextResponse.redirect(new URL("/admin", req.nextUrl));
        }
        return NextResponse.next();
    }


    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};
