import { NavLink } from 'react-router-dom';
import { items } from './items';

import s from '../HeaderMenu/HeaderMenu.module.css';

const getLink = ({ isActive }) => {
  return !isActive ? s.link : s.linkActive;
};

export default function HeaderMenu() {
  const elements = items.map(({ id, text, to }) => (
    <li className={s.item} key={id}>
      <NavLink to={to} className={getLink}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.list}>{elements}</ul>;
}
