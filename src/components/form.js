import { useState } from 'react';
// import s from './ContactsForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getAllHeroes } from 'redux/heros/selectors';
import { addHero, uploadImage } from 'redux/heros/heros-operations';

import { toast } from 'react-toastify';

export default function Form() {
  const heroes = useSelector(getAllHeroes);

  const dispatch = useDispatch();
  const [nickName, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [originDescription, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  // опять таки разбиратся с картинками
  const [images, setImages] = useState('');
  const [file, setFile] = useState(null);
  const [favorite, setFavorite] = useState('');
  console.log('file', file);

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
      // КАРТИНКИ РАЗБИРАТСЯ
      //   case 'images':
      //     setImages(value);
      //     setFile(files);
      //     break;
      case 'favorite':
        setFavorite(value);
        break;

      default:
        return;
    }
  };

  // ПЕРЕПИСАТЬ И ПРОВЕРИТЬ ВСЕ УСЛОВИЕ
  const handleChangeImage = event => {
    const { value, files } = event.target;
    setImages(value);
    if (
      (files[0].type.includes('image/png') ||
        files[0].type.includes('image/jpeg')) &&
      files[0].size <= 2000000
    ) {
      setFile(files[0]);
    } else {
      // ПРОВЕРИТЬ TOAST
      toast.warn(
        'Формат файла может быть .png или .jpg и не должен превышать 2 МВ'
      );
    }
  };

  const formSubmitData = ({
    nickName,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    images,
    favorite,
  }) => {
    const newContactName = nickName.toLowerCase();
    //   ТУТ С LOWERCASE ПРОБЛЕМЫ
    if (heroes.some(({ nickName }) => nickName === newContactName)) {
      toast.warn(`${nickName} is already in contacts`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(
        addHero({
          nickName,
          realName,
          originDescription,
          superpowers,
          catchPhrase,
          images,
          favorite,
        })
      );
    }
  };

  const resetForm = () => {
    setNickname('');
    setRealName('');
    setOriginDescription('');
    setSuperpowers('');
    setCatchPhrase('');
    setFavorite('');
    setImages('');
    setFile(null);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('images', file);
    console.log('file', file);
    dispatch(uploadImage(formData));

    formSubmitData({
      nickName,
      realName,
      originDescription,
      superpowers,
      catchPhrase,
      images,
      favorite,
    });

    resetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit} encType="multipart/form-data">
        {/*  */}
        <label
          //   className={s.label}
          htmlFor="nickname"
        >
          Nickname
          <input
            //   className={s.inputNumber}
            minLength={3}
            id="nickname"
            onChange={handleInputChange}
            type="text"
            name="nickname"
            value={nickName}
            // required
          />
        </label>
        {/*  */}
        <label
          //   className={s.label}
          htmlFor="realName"
        >
          Real name
          <input
            //   className={s.inputNumber}
            minLength={3}
            id="realName"
            onChange={handleInputChange}
            type="text"
            name="realName"
            value={realName}
            // required
          />
        </label>
        {/*  */}
        <label
          //   className={s.label}
          htmlFor="originDescription"
        >
          Description
          <input
            //   className={s.inputNumber}
            minLength={3}
            id="originDescription"
            onChange={handleInputChange}
            type="text"
            name="originDescription"
            value={originDescription}
            // required
          />
        </label>
        {/*  */}
        <label
          //   className={s.label}
          htmlFor="superpowers"
        >
          Superpowers
          <input
            //   className={s.inputNumber}
            minLength={3}
            id="superpowers"
            onChange={handleInputChange}
            type="text"
            name="superpowers"
            value={superpowers}
            // required
          />
        </label>
        {/*  */}
        <label
          //   className={s.label}
          htmlFor="catchPhrase"
        >
          Catch phrase
          <input
            //   className={s.inputNumber}
            minLength={3}
            id="catchPhrase"
            onChange={handleInputChange}
            type="text"
            name="catchPhrase"
            value={catchPhrase}
            // required
          />
        </label>
        {/*  */}
        <label
          //   className={s.label}
          htmlFor="favorite"
        >
          Favorite
          <input
            //   className={s.inputNumber}
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
        <label
          //   className={s.label}
          htmlFor="images"
        >
          images
          <input
            //   className={s.inputNumber}
            minLength={3}
            id="images"
            onChange={handleChangeImage}
            // onChange={e => e.target.files}
            type="file"
            name="images"
            value={images}
            multiple
            // required
          />
        </label>
        {/*  */}

        <button type="submit">Add hero</button>
      </form>
    </>
  );
}
