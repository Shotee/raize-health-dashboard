import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Raize Health Dashboard",
  description: "Health metrics dashboard for Raize.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:px-12">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
