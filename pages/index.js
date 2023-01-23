import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
      </p>
      <p>
        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
      </p>
      <Link href={"/ninjas/"}>See ninja listing...</Link>
    </div>
  );
}
