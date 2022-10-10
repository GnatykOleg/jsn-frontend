// import { HerosList, ContactsList, ContactsForm } from 'modules';
import { HerosList } from 'modules';
import { Container } from 'components';

import s from '../HerosPage/HerosPage.module.css';
export default function ContactsPage() {
  return (
    <section>
      <main className={s.main}>
        <Container paddingTop={50}>
          <h2 className={s.title}>HeroPage</h2>
          <HerosList />
        </Container>
      </main>
    </section>
  );
}
