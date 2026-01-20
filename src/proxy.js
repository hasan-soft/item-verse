import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
     const authCookie = request.cookies.get('item-verse-auth');

  // Safe check
  const isLoggedIn = authCookie && authCookie.value === 'true';
    if(!isLoggedIn){
        return NextResponse?.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
}