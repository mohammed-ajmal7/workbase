"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./sideBar.module.scss";
import { LOGO } from "@/utils/imageRelativePath";
import LucideIcon from "@/components/LucideIcon/LucideIcon";
import { icons } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type sidebarElements = {
  name: string;
  icon: keyof typeof icons;
  pathName: string;
};

export default function SideBar() {
  const router = useRouter();
  const currentPath = usePathname();

  const sidebarElements: sidebarElements[] = [
    {
      name: "Dashboard",
      icon: "LayoutDashboard",
      pathName: "/dashboard",
    },
    {
      name: "Projects",
      icon: "FolderKanban",
      pathName: "/projects",
    },
    {
      name: "Team",
      icon: "Users",
      pathName: "/team",
    },
    {
      name: "Settings",
      icon: "Settings",
      pathName: "/settings",
    },
    {
      name: "Suppport",
      icon: "MessagesSquare",
      pathName: "/support",
    },
  ];

  const handleClick = (pathName: string) => {
    router.push(pathName);
  };

  return (
    <aside className={styles.sideBarContainer}>
      <div className={styles.logoContainer}>
        <Image
          src={LOGO}
          alt="logo image"
          width={32}
          height={32}
          className={styles.logo}
        />
        <h1>WorkBase</h1>
      </div>
      <div className={styles.menuContainer}>
        {sidebarElements.map((cElement) => (
          const isActive = currentPath === cElement.pathName;
          <div
            className={`${styles.menuItemContainer} ${activeItem === cElement.name ? styles.active : ""}`}
            onClick={() => handleClick(cElement.pathName, cElement.name)}
            key={cElement.name}
          >
            <LucideIcon
              name={cElement.icon}
              className={`${styles.menuItemIcon} ${activeItem === cElement.name ? styles.activeItem : ""}`}
            />
            <span
              className={`${styles.menuItemName} ${activeItem === cElement.name ? styles.activeName : ""}`}
            >
              {cElement.name}
            </span>
          </div>
        ))}
        <div className={styles.userContainer}></div>
      </div>
    </aside>
  );
}
