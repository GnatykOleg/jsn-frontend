import HeaderMenu from '../Header/HeaderMenu/HeaderMenu';

import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <HeaderMenu />
      </div>
    </header>
  );
}
