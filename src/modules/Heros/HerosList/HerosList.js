import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchHeros } from 'redux/heros/heros-operations';
import { getAllHeros } from 'redux/heros/selectors';
import s from './HeroList.module.css';
// import shortid from 'shortid';

export default function HerosList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeros());
  }, [dispatch]);

  const allHeros = useSelector(getAllHeros);

  const elements = allHeros?.map(({ nickName, _id }) => {
    return (
      <div className={s.listContainer} key={_id}>
        <li>
          <p className={s.text}>{nickName}</p>
          <img
            src="https://cdn.pixabay.com/photo/2017/07/06/18/48/superman-2478978_960_720.jpg"
            alt="img"
            width={200}
            height={200}
          ></img>
        </li>
      </div>
    );
  });

  return <ul className={s.list}>{elements}</ul>;
}
