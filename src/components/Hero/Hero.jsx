import styles from './Hero.module.css';

function Hero({ onNavigate }) {
  return (
    <section className={styles.hero}>
      <img src="/lecturer.png" alt="Лекция" className={styles.image} />
      <div className={styles.text}>
        <h1>
          Наши лекторы — признанные специалисты в своих областях,
          готовые делиться опытом и знаниями.
        </h1>
        <button
          className={styles.findBtn}
          onClick={() => onNavigate('lecturers')}
        >
          НАЙТИ ЛЕКТОРА
        </button>
      </div>
    </section>
  );
}

export default Hero;