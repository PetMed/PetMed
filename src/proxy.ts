import { NextResponse, type NextRequest } from "next/server";

const ROLE_COOKIE = "petmed-role";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const role = request.cookies.get(ROLE_COOKIE)?.value;

  if (!role) {
    const url = new URL("/login", request.url);
    url.searchParams.set("next", pathname + search);
    return NextResponse.redirect(url);
  }

  if (role === "OWNER" && pathname.startsWith("/clinic")) {
    return NextResponse.redirect(new URL("/portal", request.url));
  }

  if (role !== "OWNER" && pathname.startsWith("/portal")) {
    return NextResponse.redirect(new URL("/clinic/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*", "/clinic/:path*"],
};
