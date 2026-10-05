import { lecturers } from '../../data/lecturers';
import styles from './Lecturers.module.css';

function Lecturers({ onOpenLecturer }) {
  return (
    <section className={styles.lecturers}>
      <h2>Лекторы</h2>
      <div className={styles.grid}>
        {lecturers.map((lecturer) => (
          <div
            key={lecturer.id}
            className={styles.card}
            onClick={() => onOpenLecturer(lecturer.id)}
          >
            <img src={lecturer.photo} alt={lecturer.name} className={styles.photo} />
            <div className={styles.info}>
              <h3>{lecturer.name}</h3>
              <p>{lecturer.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lecturers;