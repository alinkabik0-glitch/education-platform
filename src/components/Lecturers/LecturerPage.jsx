import styles from './LecturerPage.module.css';

function LecturerPage({ lecturer, onBack }) {
  return (
    <section className={styles.page}>
      <button onClick={onBack} className={styles.backBtn}>← Назад</button>

      <div className={styles.top}>
        <img src={lecturer.photo} alt={lecturer.name} className={styles.photo} />
        <div>
          <h1>{lecturer.name}</h1>
          <p><strong>Дисциплина:</strong> {lecturer.subject}</p>
          <p><strong>Образование:</strong> {lecturer.education}</p>
          <p><strong>Стаж:</strong> {lecturer.experience}</p>
          <p><strong>Учёная степень:</strong> {lecturer.degree}</p>
        </div>
      </div>

      <h2>Тарифы</h2>
      <ul>
        {lecturer.tariffs.map((tariff, i) => (
          <li key={i}>{tariff}</li>
        ))}
      </ul>
    </section>
  );
}

export default LecturerPage;