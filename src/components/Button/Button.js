import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={s.button}
      type={type}

      // style={{ paddingBottom: paddingBottom, paddingTop: paddingTop }}
    >
      {text}
    </button>
  );
};

// Проп типы проверить
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.node,
  // paddingTop: PropTypes.node,
};

export default Button;
