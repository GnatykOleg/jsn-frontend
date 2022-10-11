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

  const [nickname, setNickname] = useState('');
  const [real_name, setRealName] = useState('');
  const [origin_description, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catch_phrase, setCatchPhrase] = useState('');
  const [Images, setImages] = useState(null);
  const [uploadValue, setUploadValue] = useState('');

  const handleInputChange = event => {
    const { name, value, files } = event.target;

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
      // НУЖНО ЛИ ЭТО ОСТАВЛЯТЬ ЕСЛИ ЗНАЧЕНИЕИ ТАК АВТОМАТОМ ПОКАЗЫВАЕТ
      case 'Images':
        // ЗДЕСЬ Я ПОЛУЧАЮ ОНО ИЗОБРАЖЕНИЕ ИЗ МАССИВА
        const inputImages = Object.values(files);
        setImages(inputImages);
        // setImages(inputImages);
        setUploadValue(value);

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
    setUploadValue('');
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const data = new FormData();

    data.append('nickname', nickname);
    data.append('real_name', real_name);
    data.append('origin_description', origin_description);
    data.append('superpowers', superpowers);
    data.append('catch_phrase', catch_phrase);
    // data.append('Images', Images);
    Images.forEach(el => {
      data.append('Images', el, el.originalname);
    });

    if (isEditForm) {
      dispatch(
        updateHero({
          _id,
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
        })
      );

      resetForm();
      // } else if (!isEditForm) {
      //   dispatch(
      //     addHero({
      //       nickname,
      //       real_name,
      //       origin_description,
      //       superpowers,
      //       catch_phrase,
      //       files,
      //     })
      //   );
      // }
    } else if (!isEditForm) {
      dispatch(addHero(data));
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
            minLength={3}
            id="catchPhrase"
            onChange={handleInputChange}
            type="text"
            name="catchPhrase"
            value={catch_phrase}
            // required
          />
        </label>

        {/* UPLOAD IMAGES */}

        <label className={s.label} htmlFor="Images">
          Upload Images
          <input
            className={s.inputUpload}
            minLength={3}
            id="Images"
            onChange={handleInputChange}
            type="file"
            name="Images"
            value={uploadValue}
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
