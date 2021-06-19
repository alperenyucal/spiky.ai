import { ComponentProps } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "outlined";
}

export default function Button({
  variant = "outlined",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={
        variant === "primary" ? styles.primaryButton : styles.outlinedButton
      }
    />
  );
}
