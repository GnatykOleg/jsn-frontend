import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components';
import { useParams } from 'react-router-dom';
import { addHero, updateHero } from 'redux/heros/heros-operations';
// import PropTypes from 'prop-types';
import s from './Form.module.css';

export default function Form({ isEditForm }) {
  const { _id } = useParams();
  const dispatch = useDispatch();

  console.log('isEditForm', isEditForm);

  const [nickname, setNickname] = useState('');
  const [real_name, setRealName] = useState('');
  const [origin_description, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catch_phrase, setCatchPhrase] = useState('');
  const [favorite, setFavorite] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'nickname':
        setNickname(value);
        break;
      case 'realName':
        setRealName(value);
        break;
      case 'originDescription':
        setOriginDescription(value);
        break;
      case 'superpowers':
        setSuperpowers(value);
        break;
      case 'catchPhrase':
        setCatchPhrase(value);
        break;
      case 'favorite':
        setFavorite(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setNickname('');
    setRealName('');
    setOriginDescription('');
    setSuperpowers('');
    setCatchPhrase('');
    setFavorite('');
  };

  const onFormSubmit = event => {
    event.preventDefault();

    if (isEditForm) {
      dispatch(
        updateHero({
          _id,
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          favorite,
        })
      );

      resetForm();
    } else if (!isEditForm) {
      dispatch(
        addHero({
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          favorite,
        })
      );
    }

    resetForm();
  };

  return (
    <div className={s.block}>
      <form onSubmit={onFormSubmit} encType="multipart/form-data">
        <label className={s.label} htmlFor="nickname">
          Nickname
          <input
            className={s.input}
            minLength={3}
            id="nickname"
            onChange={handleInputChange}
            type="text"
            name="nickname"
            value={nickname}
            required
          />
        </label>

        <label className={s.label} htmlFor="realName">
          Real name
          <input
            className={s.input}
            minLength={3}
            id="realName"
            onChange={handleInputChange}
            type="text"
            name="realName"
            value={real_name}
            required
          />
        </label>

        <label className={s.label} htmlFor="originDescription">
          Description
          <input
            className={s.input}
            minLength={3}
            id="originDescription"
            onChange={handleInputChange}
            type="text"
            name="originDescription"
            value={origin_description}
            required
          />
        </label>
        {/*  */}
        <label className={s.label} htmlFor="superpowers">
          Superpowers
          <input
            className={s.input}
            minLength={3}
            id="superpowers"
            onChange={handleInputChange}
            type="text"
            name="superpowers"
            value={superpowers}
            required
          />
        </label>

        <label className={s.label} htmlFor="catchPhrase">
          Catch phrase
          <input
            className={s.input}
            minLength={3}
            id="catchPhrase"
            onChange={handleInputChange}
            type="text"
            name="catchPhrase"
            value={catch_phrase}
            required
          />
        </label>

        <label className={s.label} htmlFor="favorite">
          Favorite
          <input
            className={s.input}
            minLength={3}
            id="favorite"
            onChange={handleInputChange}
            type="text"
            name="favorite"
            value={favorite}
            required
          />
        </label>

        <label className={s.label} htmlFor="image">
          Upload image
          <input
            className={s.inputUpload}
            minLength={3}
            id="image"
            onChange={handleInputChange}
            type="file"
            name="image"
            multiple
            required
          />
        </label>

        <div className={s.buttonsFlex}>
          <Button text="add" type="submit" />
          <Button text="clear" type="button" onClick={() => resetForm()} />
        </div>
      </form>
    </div>
  );
}

// Button.propTypes = {
//   isEditForm: PropTypes.bool,
// };
