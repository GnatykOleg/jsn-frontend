import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchHeros } from 'redux/heros/heros-operations';
import { getAllHeros } from 'redux/heros/selectors';
import s from './HerosDetailsList.module.css';
// import shortid from 'shortid';

export default function HerosDetailsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeros());
  }, [dispatch]);

  const allHeros = useSelector(getAllHeros);

  const elements = allHeros?.map(
    ({
      nickName,
      realName,
      originDescription,
      superpowers,
      catchPhrase,
      favorite,
      _id,
    }) => {
      return (
        <div className={s.listContainer} key={_id}>
          <li>
            <p className={s.text}>{nickName}</p>
            <p className={s.text}>{realName}</p>
            <p className={s.text}>{originDescription}</p>
            <p className={s.text}>{superpowers}</p>
            <p className={s.text}>{catchPhrase}</p>
            <p className={s.text}>{favorite}</p>

            <img
              src="https://cdn.pixabay.com/photo/2017/07/06/18/48/superman-2478978_960_720.jpg"
              alt="img"
              width={200}
              height={200}
            ></img>
          </li>
        </div>
      );
    }
  );

  return <ul className={s.list}>{elements}</ul>;
}
