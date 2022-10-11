import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchHeros, findHeroById } from 'redux/heros/heros-operations';
import { getAllHeros } from 'redux/heros/selectors';
import { Modal, Button, Form } from 'components';

import s from './HerosDetailsList.module.css';

export default function HerosDetailsList() {
  const dispatch = useDispatch();

  const { _id } = useParams();

  useEffect(() => {
    dispatch(fetchHeros());
    dispatch(findHeroById(_id));
  }, [dispatch, _id]);

  const allHeros = useSelector(getAllHeros);

  const [showModal, setShowModal] = useState(false);
  const [isEditForm, setisEditForm] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
    setisEditForm(true);
  };

  const elements = allHeros?.map(
    ({
      _id,
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    }) => {
      console.log('Images', Images);
      return (
        <div className={s.listContainer} key={_id}>
          <li>
            <p className={s.text}>{_id}</p>
            <Button text="edit" type="button" onClick={() => toggleModal()} />

            <p className={s.text}>Nickname: {nickname}</p>

            <p className={s.text}>Real name: {real_name}</p>

            <p className={s.text}>Description: {origin_description}</p>

            <p className={s.text}>Phrase: {catch_phrase}</p>

            <p className={s.text}>Superpowers: {superpowers}</p>
            {Images?.map(el => (
              <img src={el.path} alt={el.filename}></img>
            ))}
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

  return (
    <>
      <ul className={s.list}>{elements}</ul>
      {showModal && (
        <Modal
          onClose={() => {
            toggleModal();
          }}
          component={<Form isEditForm={isEditForm} />}
        />
      )}
    </>
  );
}
