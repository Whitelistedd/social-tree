import { NextRequest, NextResponse } from 'next/server'

import { auth } from 'lib/clientApp'

export function middleware(request: NextRequest) {
  const { currentUser } = auth
  console.log(currentUser?.email)
  if (request.nextUrl.pathname.startsWith('/login')) {
    if (currentUser) {
      return NextResponse.next()
    } else {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.rewrite(url)
    }
  }
}
