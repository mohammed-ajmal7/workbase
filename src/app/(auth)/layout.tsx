import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.heroSection}>
        <h1>WorkBase</h1>
        <p>Lets Build Your Own Co-Work Space</p>
      </div>
      <div className={styles.formModuleSection}>{children}</div>
    </div>
  );
}
