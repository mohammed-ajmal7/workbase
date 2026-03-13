import AuthWrapper from "@/components/AuthWrapper";
import "../styles/globals.css";
import ReduxProvider from "@/redux/providers/ReduxProvider";
import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthWrapper>{children}</AuthWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
