import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // Protect all routes under /dashboard
      const isAccessingDashboard = req.nextUrl.pathname.startsWith("/dashboard");
      
      if (isAccessingDashboard) {
        return !!token;
      }
      
      return true;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};