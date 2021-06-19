import styles from "./Home.module.scss";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowItem}>
          <Card
            color="#FA6267"
            header={"Cross-Module Analysis"}
            subheader={"Spiky.ai Platform"}
            description="Deliver complete analysis across Spiky products by using AI algorithms and deep analytics methods. Create new data points from cross-module interactions to further understand problems."
            iconUrl={"./icons/functionality-card-image-01.png"}
          />
        </div>
        <div className={styles.rowItem}>
          <Card
            color="#FACB62"
            header={"Personalization"}
            subheader={"Spiky.ai Platform"}
            description="All students need personal attention to enhance their performance. Spiky.ai recognizes the uniqueness of each student and creates a custom-crafted educational experience."
            iconUrl={"./icons/functionality-card-image-02.png"}
          />
        </div>
        <div className={styles.rowItem}>
          <Card
            color="#16D47C"
            header={"Strategic Decision"}
            subheader={"Spiky.ai Platform"}
            description="Reduce the management team's overhead and provide a comprehensive understanding of your institutional needs."
            iconUrl={"./icons/functionality-card-image-03.png"}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.rowItem}>
          <Card
            color="#16D47C"
            header={"Live Emotion Analysis"}
            subheader={"Sentiment Detective"}
            description="Understand the relationship between your students' emotions and their success to create a peaceful and rich learning experience. Use emotional metrics as your key-performance enabler."
            iconUrl={"./icons/functionality-card-image-04.png"}
            link={{
              href: "https://www.reddit.com/r/reactjs/",
              text: "Understand Your Students",
            }}
          />
        </div>
        <div className={styles.rowItem}>
          <Card
            color="#2077D1"
            header={"Future Performance Prediction"}
            subheader={"Performance Oracle"}
            description="Determine the right problems to concentrate on to increase student success and teacher performance. Observe future performance with up to 92% accuracy."
            iconUrl={"./icons/functionality-card-image-05.png"}
            link={{
              href: "https://www.boredpanda.com/",
              text: "Begin Predicting the Future",
            }}
          />
        </div>
        <div className={styles.rowItem}>
          <Card
            color="#FA6267"
            header={"Equal Learning Environment"}
            subheader={"Exam Proctor"}
            description="Deliver a secured exam environment for institutions. Create equal learning environment opportunities for students."
            iconUrl={"./icons/functionality-card-image-06.png"}
            link={{
              href: "https://techcrunch.com/",
              text: "Create a Fair Environment",
            }}
          />
        </div>
      </div>
    </div>
  );
}
