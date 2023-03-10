import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  {
    console.log(children.type.name);
  }
  return (
    <>
      <Head>
        <title>
          Ninja List | {children.type.name ? children.type.name : ""}
        </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <Navbar />
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
