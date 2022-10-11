import { Container, Link } from 'components';

import s from '../HomePage/HomePage.module.css';
export default function HomePage() {
  return (
    <section className={s.section}>
      <main>
        <Container paddingTop={50}>
          <h1 className={s.title}>
            Welcome to the web application for adding and collecting heroes.
          </h1>
          <Link to="/heros" text="go to heros" />
          <img
            width={600}
            className={s.img}
            src="https://cdn.pixabay.com/photo/2019/12/07/21/26/boom-4680150_960_720.png"
            alt="boom"
          ></img>
        </Container>
        <div className={s.container}></div>
      </main>
    </section>
  );
}
