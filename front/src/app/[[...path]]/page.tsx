import { PharmaCard } from "@/app/[[...path]]/PharmaCard";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>
        Хотите оставить отзыв или добавить свою организацию? Зарегистрируйтесь!
      </h3>
      <ul className={styles.pharmaWrapper}>
        {Array.from(new Array(8), () => (
          <li>
            <PharmaCard />
          </li>
        ))}
      </ul>
    </main>
  );
}
