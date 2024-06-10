import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { authOptions } from "./app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// export default withAuth(
//     async function middleware(req: NextRequest) {
//       // Custom logic for authenticated users can be placed here
//       return NextResponse.next();
//     },
//     {
//       callbacks: {
//         async authorized({ token }) {
//           // If there's no token, the user is not authenticated
//           return !!token;
//         },
//       },
//     }
//   );

export default withAuth(
  async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (
      token &&
      (req.nextUrl.pathname === "/auth/login" || req.nextUrl.pathname === "/auth/register")
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized({ token }) {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};


// export default async function middleware(req: NextRequest) {
//   const session = await getServerSession({ ...authOptions });
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   // Redirige a usuarios autenticados que intentan acceder a la página de inicio de sesión o registro al dashboard
//   if (
//     session?.user &&
//     (req.nextUrl.pathname === "/auth/login" || req.nextUrl.pathname === "/auth/register")
//   ) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   // Redirige a usuarios no autenticados que intentan acceder al dashboard a la página de inicio de sesión
//   if (!session?.user && req.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   return NextResponse.next();
// }
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
