import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import Form from 'components/Form/Form';

const modalRoot = document.querySelector('#modal-root');

// export default function Modal({ tags, largeImageURL, onClose }) {
export default function Modal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onBackdropClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const onButtonClose = event => {
    onClose();
  };
  return createPortal(
    <div className={s.overlay} onClick={onBackdropClose}>
      <div className={s.modal}>
        <button onClick={onButtonClose} className={s.button}>
          CLOSE
        </button>
        <Form />
        {/* <img src={largeImageURL} alt={tags} /> */}
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  //   largeImageURL: PropTypes.string.isRequired,
  //   tags: PropTypes.string.isRequired,
};
