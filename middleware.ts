import { NextRequest, NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["en", "pt"];

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  const partialPath = request?.headers?.get("next-url");
  const paths = partialPath?.split("/") || [];
  const matchedLocale = paths.find((path) => locales.includes(path));

  return matchedLocale || defaultLocale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};

