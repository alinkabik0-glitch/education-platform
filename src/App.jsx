import { useState } from 'react';
import './styles/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Partners from './components/Partners/Partners';
import Lecturers from './components/Lecturers/Lecturers';
import LecturerPage from './components/Lecturers/LecturerPage';
import { lecturers } from './data/lecturers';

function App() {
  const [openLecturerId, setOpenLecturerId] = useState(null);

  const openLecturer = (id) => {
    setOpenLecturerId(id);
    window.scrollTo(0, 0);
  };

  const closeLecturer = () => {
    setOpenLecturerId(null);
    setTimeout(() => {
      document.getElementById('lecturers')?.scrollIntoView();
    }, 0);
  };

  // ← НОВАЯ функция: возврат на главную + скролл к блоку
  const goToSection = (id) => {
    setOpenLecturerId(null);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  if (openLecturerId !== null) {
    const lecturer = lecturers.find((l) => l.id === openLecturerId);
    return (
      <>
        <Header onNavigate={goToSection} />
        <LecturerPage lecturer={lecturer} onBack={closeLecturer} />
      </>
    );
  }

  return (
    <>
      <Header onNavigate={goToSection} />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="partners"><Partners /></div>
      <div id="lecturers">
        <Lecturers onOpenLecturer={openLecturer} />
      </div>
    </>
  );
}

export default App;