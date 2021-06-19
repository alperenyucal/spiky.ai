import { motion } from "framer-motion";
import { useState } from "react";
import { useOutsideClick } from "../../utils/hooks";
import styles from "./Card.module.scss";

interface CardProps {
  iconUrl: string;
  header: string;
  subheader: string;
  description: string;
  color: string;
  // optional
  link?: {
    href: string;
    text: string;
  };
}

export default function Card(props: CardProps) {
  const [focus, setFocus] = useState(false);

  const ref = useOutsideClick(function () {
    setFocus(false);
  });

  const variants = {
    focused: { scale: 1.1, backgroundColor: props.color },
    default: { scale: 1 },
  };

  return (
    <motion.div
      className={styles.card}
      style={{ borderColor: props.color }}
      animate={focus ? variants.focused : variants.default}
      onClick={() => {
        setFocus(true);
      }}
      ref={ref}
    >
      <div className={styles.content}>
        <div>
          <img
            width={50}
            src={props.iconUrl}
            alt="card-icon"
            style={{ filter: focus ? "brightness(0) invert(1)" : undefined }}
          />
        </div>
        <h3 style={{ color: focus ? "#fff" : props.color }}>{props.header}</h3>
        <h4 style={{ color: focus ? "#fff" : props.color }}>
          - {props.subheader}
        </h4>
        <p
          style={{ color: focus ? "#fff" : undefined }}
          className={styles.description}
        >
          {props.description}
        </p>
        {props.link ? (
          <a
            style={{ color: focus ? "#fff" : props.color }}
            className={styles.link}
            href={props.link.href}
          >{`> ${props.link.text}`}</a>
        ) : null}
      </div>
    </motion.div>
  );
}
