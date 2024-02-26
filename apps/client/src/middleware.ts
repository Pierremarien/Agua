import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-url", request.url);
  requestHeaders.set("x-pathname", pathname);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}
