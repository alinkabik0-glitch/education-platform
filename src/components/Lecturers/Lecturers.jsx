import { useReducer, useEffect } from 'react';
import { lecturers } from '../../data/lecturers';
import { lecturersReducer, ACTIONS } from '../../reducers/lecturersReducer';
import styles from './Lecturers.module.css';

function Lecturers({ onOpenLecturer }) {
  const [state, dispatch] = useReducer(lecturersReducer, {
    lecturers: [],
    filteredLecturers: [],
    filters: {
      sortBy: 'name',
      minExperience: 0,
      maxPrice: Infinity,
    },
  });

  // Инициализация данных
  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LECTURERS, payload: lecturers });
  }, []);

  return (
    <section className={styles.lecturers}>
      <h2>Лекторы</h2>
      
      {/* Панель фильтров */}
      <div className={styles.filters}>
        {/* Сортировка */}
        <div className={styles.filterGroup}>
          <label>Сортировать:</label>
          <select
            value={state.filters.sortBy}
            onChange={(e) => dispatch({ type: e.target.value })}
            className={styles.select}
          >
            <option value={ACTIONS.SORT_BY_NAME}>По имени</option>
            <option value={ACTIONS.SORT_BY_EXPERIENCE}>По стажу</option>
            <option value={ACTIONS.SORT_BY_PRICE}>По цене</option>
          </select>
        </div>

        {/* Фильтр по стажу */}
        <div className={styles.filterGroup}>
          <label>Минимальный стаж:</label>
          <select
            onChange={(e) => 
              dispatch({ 
                type: ACTIONS.FILTER_BY_EXPERIENCE, 
                payload: parseInt(e.target.value) 
              })
            }
            className={styles.select}
          >
            <option value={0}>Любой</option>
            <option value={5}>От 5 лет</option>
            <option value={10}>От 10 лет</option>
            <option value={15}>От 15 лет</option>
          </select>
        </div>

        {/* Фильтр по цене */}
        <div className={styles.filterGroup}>
          <label>Максимальная цена:</label>
          <select
            onChange={(e) => 
              dispatch({ 
                type: ACTIONS.FILTER_BY_PRICE, 
                payload: parseInt(e.target.value) 
              })
            }
            className={styles.select}
          >
            <option value={99999}>Любая</option>
            <option value={2500}>До 2500 ₽</option>
            <option value={3000}>До 3000 ₽</option>
            <option value={3500}>До 3500 ₽</option>
          </select>
        </div>

        {/* Кнопка сброса */}
        <button 
          onClick={() => dispatch({ type: ACTIONS.RESET })}
          className={styles.resetBtn}
        >
          Сбросить
        </button>
      </div>

      {/* Список лекторов */}
      <div className={styles.grid}>
        {state.filteredLecturers.map((lecturer) => (
          <div
            key={lecturer.id}
            className={styles.card}
            onClick={() => onOpenLecturer(lecturer.id)}
          >
            <img src={lecturer.photo} alt={lecturer.name} className={styles.photo} />
            <div className={styles.info}>
              <h3>{lecturer.name}</h3>
              <p>{lecturer.subject}</p>
              <p className={styles.experience}>Стаж: {lecturer.experience}</p>
              <p className={styles.price}>{lecturer.tariffs[0]}</p>
            </div>
          </div>
        ))}
      </div>

      {state.filteredLecturers.length === 0 && (
        <p className={styles.noResults}>Лекторы не найдены</p>
      )}
    </section>
  );
}

export default Lecturers;