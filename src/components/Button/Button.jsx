import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick} className={s.button} type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.node,
};

export default Button;
