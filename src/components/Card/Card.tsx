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
  return (
    <div className={styles.card} style={{ borderColor: props.color }}>
      <div className={styles.content}>
        <img width={50} src={props.iconUrl} alt="card-icon" />
        <h3 style={{ color: props.color }}>{props.header}</h3>
        <h4 style={{ color: props.color }}>- {props.subheader}</h4>
        <p className={styles.description}>{props.description}</p>
        {props.link ? (
          <a
            style={{ color: props.color }}
            className={styles.link}
            href={props.link.href}
          >{`> ${props.link.text}`}</a>
        ) : null}
      </div>
    </div>
  );
}
