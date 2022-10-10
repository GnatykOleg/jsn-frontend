import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components';

import s from './Form.module.css';
import {
  addHero,
  // uploadImage
} from 'redux/heros/heros-operations';

export default function Form() {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');
  const [real_name, setRealName] = useState('');
  const [origin_description, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catch_phrase, setCatchPhrase] = useState('');

  // const [file, setFile] = useState(null);
  const [favorite, setFavorite] = useState('');

  const handleInputChange = event => {
    const {
      name,
      value,
      // , files
    } = event.target;
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

      // case 'image':
      //   setFile(files[0]);
      //   break;
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

    // setFile(null);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    // const data = new FormData();
    // data.append('file', file);

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
            // required
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
            // required
          />
        </label>

        <label
          className={s.label}
          //   className={s.label}
          htmlFor="originDescription"
        >
          Description
          <input
            className={s.input}
            minLength={3}
            id="originDescription"
            onChange={handleInputChange}
            type="text"
            name="originDescription"
            value={origin_description}
            // required
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
            // required
          />
        </label>

        <label className={s.label} htmlFor="catchPhrase">
          Catch phrase
          <input
            className={s.input}
            //   className={s.inputNumber}
            minLength={3}
            id="catchPhrase"
            onChange={handleInputChange}
            type="text"
            name="catchPhrase"
            value={catch_phrase}
            // required
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
            // required
          />
        </label>
        {/*  */}
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
            // required
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

// Form.propTypes = {
//   textButtonAdd: PropTypes.string,
//   textButtonClear: PropTypes.string,

//   // paddingTop: PropTypes.node,
// };
