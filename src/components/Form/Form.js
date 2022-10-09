import { useState } from 'react';
import s from './Form.module.css';

import { useDispatch } from 'react-redux';

import {
  addHero,
  // uploadImage
} from 'redux/heros/heros-operations';

export default function Form() {
  const dispatch = useDispatch();
  // const heroes = useSelector(getAllHeros);

  const [nickName, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [originDescription, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  // опять таки разбиратся с картинками
  // const [image, setImage] = useState('');
  const [file, setFile] = useState(null);
  const [favorite, setFavorite] = useState('');

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

      case 'image':
        setFile(files[0]);
        break;
      case 'favorite':
        setFavorite(value);
        break;

      default:
        return;
    }
  };

  // ПЕРЕПИСАТЬ И ПРОВЕРИТЬ ВСЕ УСЛОВИЕ

  // const formSubmitData = ({
  //   nickName,
  //   realName,
  //   originDescription,
  //   superpowers,
  //   catchPhrase,
  //   // file,
  //   // data,
  //   favorite,
  // }) => {
  //   const newContactName = nickName.toLowerCase();
  //   //   ТУТ С LOWERCASE ПРОБЛЕМЫ
  //   if (heroes.some(({ nickName }) => nickName === newContactName)) {
  //     toast.warn(`${nickName} is already in contacts`, {
  //       position: 'top-center',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } else {
  //     dispatch(
  //       addHero({
  //         nickName,
  //         realName,
  //         originDescription,
  //         superpowers,
  //         catchPhrase,
  //         // file,
  //         // data,
  //         favorite,
  //       })
  //     );
  //   }
  // };

  const formSubmitData = ({
    nickName,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    favorite,
  }) => {
    dispatch(
      addHero({
        nickName,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        // file,
        // data,
        favorite,
      })
    );
  };

  const resetForm = () => {
    setNickname('');
    setRealName('');
    setOriginDescription('');
    setSuperpowers('');
    setCatchPhrase('');
    setFavorite('');
    // setImage('');
    setFile(null);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const data = new FormData();
    data.append('file', file);

    // dispatch(uploadImage(formData));

    formSubmitData({
      nickName,
      realName,
      originDescription,
      superpowers,
      catchPhrase,
      // file,
      // data,
      favorite,
    });

    resetForm();
  };

  return (
    <div className={s.block}>
      <form onSubmit={onFormSubmit} encType="multipart/form-data">
        {/*  */}

        <label
          className={s.label}
          //   className={s.label}
          htmlFor="nickname"
        >
          Nickname
          <input
            className={s.input}
            //   className={s.inputNumber}
            minLength={3}
            id="nickname"
            onChange={handleInputChange}
            type="text"
            name="nickname"
            value={nickName}
            required
          />
        </label>
        {/*  */}
        <label
          className={s.label}
          //   className={s.label}
          htmlFor="realName"
        >
          Real name
          <input
            className={s.input}
            //   className={s.inputNumber}
            minLength={3}
            id="realName"
            onChange={handleInputChange}
            type="text"
            name="realName"
            value={realName}
            required
          />
        </label>
        {/*  */}
        <label
          className={s.label}
          //   className={s.label}
          htmlFor="originDescription"
        >
          Description
          <input
            className={s.input}
            //   className={s.inputNumber}
            minLength={3}
            id="originDescription"
            onChange={handleInputChange}
            type="text"
            name="originDescription"
            value={originDescription}
            required
          />
        </label>
        {/*  */}
        <label
          className={s.label}
          //   className={s.label}
          htmlFor="superpowers"
        >
          Superpowers
          <input
            className={s.input}
            //   className={s.inputNumber}
            minLength={3}
            id="superpowers"
            onChange={handleInputChange}
            type="text"
            name="superpowers"
            value={superpowers}
            required
          />
        </label>
        {/*  */}
        <label
          className={s.label}
          //   className={s.label}
          htmlFor="catchPhrase"
        >
          Catch phrase
          <input
            className={s.input}
            //   className={s.inputNumber}
            minLength={3}
            id="catchPhrase"
            onChange={handleInputChange}
            type="text"
            name="catchPhrase"
            value={catchPhrase}
            required
          />
        </label>
        {/*  */}
        <label
          className={s.label}
          //   className={s.label}
          htmlFor="favorite"
        >
          Favorite
          <input
            className={s.input}
            //   className={s.inputNumber}
            minLength={3}
            id="favorite"
            onChange={handleInputChange}
            type="text"
            name="favorite"
            value={favorite}
            required
          />
        </label>
        {/*  */}
        <label
          className={s.label}
          //   className={s.label}
          htmlFor="image"
        >
          Upload image
          <input
            className={s.inputUpload}
            //   className={s.inputNumber}
            minLength={3}
            id="image"
            onChange={handleInputChange}
            // onChange={e => e.target.files}
            type="file"
            name="image"
            // МЕТОД АППЕНД ЗАПОЛНЯЕНТ ЗНАЧЕНИЯ ВМЕСТО СТЕЙТКА
            // НО ПРИ САБМИТЕ МНЕ ЖЕ НУЖНО ОБНУЛЯТЬ
            // value={image}
            multiple
            required
          />
        </label>
        {/*  */}

        <div className={s.buttonsFlex}>
          <button className={s.button} type="submit">
            Add hero
          </button>
          <button
            onClick={() => resetForm()}
            className={s.button}
            type="button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
