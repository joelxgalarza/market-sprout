import Link from "next/link";
import styles from "../styles/Page.module.css";
import icon from "../public/icon.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
export default function PageHeader() {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.button}>
        <Image src={icon} alt={"icon"} width={40} height={40} />
      </Link>

      <div
        className={
          active ? styles.headerContainerActive : styles.headerContainer
        }
      >
        <Link href={"/services"} className={styles.button}>
          Services
        </Link>
        <Link href={"/about"} className={styles.button}>
          About
        </Link>
      </div>
      <div className={styles.headerButton} onClick={() => setActive(!active)}>
        <IoMenu size={40} />
      </div>
    </div>
  );
}
