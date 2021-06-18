import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>Home</Link>
      <Link to={"/data-visualization"}>Time Chart</Link>
    </div>
  );
}
