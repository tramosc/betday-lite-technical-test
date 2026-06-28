import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ token }) => Boolean(token),
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: ["/profile/:path*", "/bets/:path*"],
};