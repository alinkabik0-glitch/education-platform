import styles from './Partners.module.css';

function Partners() {
  return (
    <section className={styles.partners}>
      <h2>Партнёры</h2>
      <div className={styles.list}>
        <div className={styles.card}>
          <a href="https://icl.ru" target="_blank" rel="noopener noreferrer">
            <img src="/icl.png" alt="ICL" className={styles.logo} />
          </a>
          <p>
            ICL — высокотехнологичная компания, входящая в число крупнейших
            ИТ-компаний России, предоставляющая полный спектр ИТ-услуг.
          </p>
        </div>
        <div className={styles.card}>
          <a href="https://tatneft.ru" target="_blank" rel="noopener noreferrer">
            <img src="/tatneft.png" alt="TATNEFT" className={styles.logo} />
          </a>
          <p>
            «Татнефть» — одна из крупнейших российских вертикально-интегрированных
            компаний, развивающая нефтегазодобычу, нефтепереработку и
            электроэнергетику.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Partners;