import PageHeader from "./PageHeader";
import styles from "../styles/Page.module.css";
export default function PageComponent({ children }: { children }) {
  return (
    <div className={styles.pageContainer}>
      <PageHeader />
      {children}
    </div>
  );
}
