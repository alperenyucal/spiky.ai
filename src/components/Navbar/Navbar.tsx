import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <Button variant={location.pathname === "/" ? "primary" : "outlined"}>
          Home
        </Button>
      </Link>
      <Link  to={"/data-visualization"}>
        <Button variant={location.pathname === "/data-visualization" ? "primary" : "outlined"}>Time Chart</Button>
      </Link>
    </div>
  );
}
