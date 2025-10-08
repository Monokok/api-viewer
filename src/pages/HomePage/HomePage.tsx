import styles from "./HomePage.module.css";
import firstImage from "../../assets/image-1.jpg";
import secondImage from "../../assets/image-2.jpg";
import { Card } from "../../shared/ui/Card/Card";

export function HomePage() {
  return (
    <div className={styles["home-page"]}>
      <section className={styles["header-title"]}>
        <h1>API Viewer</h1>
        <h3>Современное средство взаимодействия с API</h3>
      </section>
      <section className={styles["image-panel"]}>
        <img src={firstImage} alt="Logo" />
        <img src={secondImage} alt="Logo" />
        <img src={secondImage} alt="Logo" />
        <img src={secondImage} alt="Logo" />
        <img src={secondImage} alt="Logo" />
      </section>
      <section className={styles["card-grid"]}>
        <div className={styles["card-grid-header"]}>
            <h2>Возможности и преимущества</h2>
            <h3>Да, это всё про → API Viewer!</h3>
        </div>
        <Card
          imageUrl={firstImage}
          buttonText="К Request-Конструктору"
          header="Создание запросов"
          description="Основной инструмент для создания запросов - это Request-Конструктор. Надёжный, современный, лёгкий в освоении и использовании"
          callback={foo}
        ></Card>
        <Card
          imageUrl={firstImage}
          buttonText="Создать новый запрос"
          header="Настройка параметров"
          description="Каждый End-Point будет достигнут"
          callback={foo}
        ></Card>
        <Card
          imageUrl={firstImage}
          buttonText="Создать учетную запись"
          header="История и результаты запросов"
          description="Версионность требуется любому проекту, однако и некогда популярным API-запросам нужно вновь освежится в чьей-либо памяти - остается лишь подгрузить ранее отправленный"
          callback={foo}
        ></Card>
      </section>

      
    </div>
  );
}

function foo() {
  return;
}
