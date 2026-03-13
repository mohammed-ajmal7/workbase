import DashboardLayoutModule from "@/modules/DashboardLayoutModule";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DashboardLayoutModule>{children}</DashboardLayoutModule>;
}
