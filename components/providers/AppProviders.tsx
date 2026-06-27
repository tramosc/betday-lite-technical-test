"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <SessionProvider>
      {children}
      <Toaster richColors position="top-right" />
    </SessionProvider>
  );
}