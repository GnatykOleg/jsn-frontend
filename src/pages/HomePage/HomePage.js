import { useState } from 'react';
import { Modal } from '../../components';
import { Container, Button } from 'components';
import s from '../HomePage/HomePage.module.css';
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <section className={s.section}>
      <main>
        <Container paddingTop={50}>
          <h1 className={s.title}>
            Welcome to the web application for adding and collecting heroes.
          </h1>
          <Button
            text="add new hero"
            type="button"
            onClick={() => toggleModal()}
          />

          <img
            width={600}
            className={s.img}
            src="https://cdn.pixabay.com/photo/2019/12/07/21/26/boom-4680150_960_720.png"
            alt="boom"
          ></img>
        </Container>
        <div className={s.container}></div>
        {showModal && <Modal onClose={toggleModal} />}
      </main>
    </section>
  );
}
