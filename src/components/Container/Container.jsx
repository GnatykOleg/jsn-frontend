import PropTypes from 'prop-types';

import s from './Container.module.css';

const Container = ({ children, paddingBottom, paddingTop }) => {
  return (
    <div
      className={s.container}
      style={{ paddingBottom: paddingBottom, paddingTop: paddingTop }}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  paddingBottom: PropTypes.node,
  paddingTop: PropTypes.node,
};

export default Container;
