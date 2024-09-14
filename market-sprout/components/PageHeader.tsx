import Link from "next/link";
import styles from "../styles/Page.module.css";
export default function PageHeader() {
  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.button}>
        Home
      </Link>
      <Link href={"/services"} className={styles.button}>
        Services
      </Link>
      <Link href={"/about"} className={styles.button}>
        Home
      </Link>
    </div>
  );
}
