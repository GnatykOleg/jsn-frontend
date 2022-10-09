// import { HerosList, ContactsList, ContactsForm } from 'modules';
import { HerosList } from 'modules';

import s from '../HerosPage/HerosPage.module.css';
export default function ContactsPage() {
  return (
    <section>
      <main className={s.main}>
        <div className={s.container}>
          <h2 className={s.title}>Contacts</h2>
          <HerosList />
          {/* <ContactsForm /> */}
          {/* <ContactsFilter /> */}
          {/* <ContactsList /> */}
        </div>
      </main>
    </section>
  );
}
