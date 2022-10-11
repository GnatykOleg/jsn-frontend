import HeaderMenu from './HeaderMenu/HeaderMenu';
import { Container } from 'components';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Container paddingBottom={15} paddingTop={15}>
        <HeaderMenu />
      </Container>
    </header>
  );
}
