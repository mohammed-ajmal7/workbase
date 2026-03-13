import React from "react";
import styles from "./header.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import LucideIcon from "@/components/LucideIcon/LucideIcon";
import "@/styles/variables.scss";
import Avatar from "@/components/Avatar/Avatar";
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1>Dashboard</h1>
      <div className={styles.headerRightSection}>
        {/* <SearchBar /> */}
        <div className={styles.bellIconBox}>
          <LucideIcon
            name="Bell"
            absoluteStrokeWidth
            className={styles.BellIcon}
          />
        </div>
        <div className={styles.headerAvatarBox}>
          <Avatar />
          <LucideIcon name="ChevronDown" />
        </div>
      </div>
    </header>
  );
}
