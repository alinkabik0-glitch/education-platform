import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h2>О нас</h2>
        <p>
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО
          с профессиональными лекторами, спикерами и тренерами.
          Мы упрощаем процесс подбора, бронирования и организации лекций,
          помогая находить экспертов, которые не просто делятся знаниями,
          но и вдохновляют аудиторию.
        </p>
      </div>
      <img src="/about.png" alt="О нас" className={styles.image} />
    </section>
  );
}

export default About;