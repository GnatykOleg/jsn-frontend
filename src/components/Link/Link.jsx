import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './Link.module.css';

const Link = ({ text, to }) => {
  return (
    <NavLink to={to} className={s.navLink}>
      {text}
    </NavLink>
  );
};

// Проп типы проверить
Link.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
