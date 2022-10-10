import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchHeros, deleteHero } from 'redux/heros/heros-operations';
import { getAllHeros, loadingSelector } from 'redux/heros/selectors';
import { Button, Loader, Modal } from 'components';
import s from './HeroList.module.css';
// import shortid from 'shortid';

export default function HerosList() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  useEffect(() => {
    dispatch(fetchHeros());
  }, [dispatch]);

  const allHeros = useSelector(getAllHeros);

  const elements = allHeros?.map(
    ({
      _id,
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      favorite,
    }) => {
      return (
        <li key={_id} className={s.item}>
          <p className={s.text}>{nickname}</p>
          <img
            src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/gsfc_20171208_archive_e000226_orig.jpg"
            // src="https://img4.goodfon.ru/original/1920x1200/b/f9/nissan-titan-nissan-titan-pikap.jpg"
            alt="img"
          ></img>
          <div className={s.buttonsFlex}>
            <Button type="button" text="Edit" onClick={() => toggleModal()} />
            <Button
              type="button"
              text="Delete"
              onClick={() => dispatch(deleteHero(_id))}
            />
          </div>
        </li>
      );
    }
  );

  return (
    <>
      <ul className={s.list}>{loadingSelector ? elements : <Loader />}</ul>
      {showModal && (
        <Modal
          onClose={() => {
            toggleModal();
          }}
        />
      )}
    </>
  );
}
