// import s from '../HomePage/HomePage.module.css';
import { HerosDetailsList } from 'modules';
import { Container } from 'components';

export default function HerosDetailsPage() {
  return (
    <section>
      <main>
        <div>
          <Container paddingTop={50}>
            <h1>DETAILS PAGE</h1>
            <HerosDetailsList />
          </Container>
        </div>
      </main>
    </section>
  );
}
