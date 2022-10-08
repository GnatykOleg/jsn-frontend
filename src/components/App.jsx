import { fetchHeros } from 'redux/heros/heros-operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHeroes } from 'redux/heros/selectors';
import { ToastContainer } from 'react-toastify';

import Form from '../components/form';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeros());
  }, [dispatch]);

  const data = useSelector(getAllHeroes);

  return (
    <div>
      <Form />

      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
      <ToastContainer />
    </div>
  );
};
