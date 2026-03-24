import React from "react";
import styles from "./dashboardLayout.module.scss";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

export default function DashboardLayoutModule({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.dashboardWrapper}>
      <SideBar />

      <div className={styles.rightSection}>
        <Header />
        <main className={styles.mainSection}>{children}</main>
      </div>
    </div>
  );
}
