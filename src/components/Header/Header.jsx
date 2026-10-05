import styles from './Header.module.css';

function Header({ onNavigate }) {
  const links = [
    { id: 'home', label: 'Главная' },
    { id: 'partners', label: 'Партнёры' },
    { id: 'about', label: 'О нас' },
    { id: 'lecturers', label: 'Лекторы' },
  ];

  const handleClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={styles.btn}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;