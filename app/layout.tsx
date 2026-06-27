import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import AuthProvider from "@/components/providers/SessionProvider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BetDay Lite",
  description: "Simulación de apuestas deportivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${rubik.className} bg-zinc-100 text-white antialiased`}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}