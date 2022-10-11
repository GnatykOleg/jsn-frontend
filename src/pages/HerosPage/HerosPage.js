// import { HerosList, ContactsList, ContactsForm } from 'modules';
import { HerosList } from 'modules';
import { Container, Button, Modal, Form } from 'components';
import { useState } from 'react';
import s from '../HerosPage/HerosPage.module.css';

export default function ContactsPage() {
  const [showModal, setShowModal] = useState(false);
  const [isEditForm, setisEditForm] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
    setisEditForm(false);
  };

  return (
    <>
      <section>
        <main className={s.main}>
          <Container paddingTop={50}>
            <h2 className={s.title}>HeroPage</h2>
            <Button
              text="add new hero"
              type="button"
              onClick={() => toggleModal()}
            />
            <HerosList />
          </Container>
        </main>
      </section>
      {showModal && (
        <Modal
          onClose={() => {
            toggleModal();
          }}
          component={<Form isEditForm={isEditForm} />}
        />
      )}
    </>
  );
}
