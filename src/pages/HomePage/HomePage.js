import s from '../HomePage/HomePage.module.css';
import { useState } from 'react';
import { Modal } from '../../components';
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <section className={s.section}>
      <main className={s.main}>
        <div className={s.container}>
          <h1 className={s.title}>
            Welcome to the web application for adding and collecting heroes.
          </h1>
          <button className={s.button} onClick={toggleModal}>
            add new hero
          </button>
          <img
            className={s.img}
            src="https://cdn.pixabay.com/photo/2019/12/07/21/26/boom-4680150_960_720.png"
            alt="boom"
          ></img>
        </div>
        {showModal && <Modal onClose={toggleModal} />}
      </main>
    </section>
  );
}
