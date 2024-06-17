import { NextResponse, NextRequest } from 'next/server';

const Middleware = (req: NextRequest) => {
  if (req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase()) {
    return NextResponse.next();
  }

  const newUrl = new URL(
    req.nextUrl.origin + req.nextUrl.pathname.toLowerCase() + req.nextUrl.search
  );

  return NextResponse.redirect(newUrl);
};

export default Middleware;
