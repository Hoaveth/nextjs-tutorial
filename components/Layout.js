import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
