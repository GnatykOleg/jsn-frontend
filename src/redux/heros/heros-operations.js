import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000/api';

export const fetchHeros = createAsyncThunk(
  'heros/fetchHeros',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/heros');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addHero = createAsyncThunk(
  'hero/addHero',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/heros', payload);
      toast.success('Successful add hero!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      console.log('Успешно отправили');

      return data;
    } catch (error) {
      toast.error('error', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  'heros/deleteHero',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/heros/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  'heros/updateHero',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/heros/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ПРОВЕРИТЬ МЕТООД ЗАПРОСА
export const uploadImage = createAsyncThunk(
  'heros/uploadImage',
  async (payload, { rejectWithValue }) => {
    // const contacts = { number, name };
    try {
      const { data } = await axios.patch('/heros', payload);
      // const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const uploadImage = formData => async (dispatch, getState) => {
//   //   dispatch(uploadAvatarRequest());
//   try {
//     // const response = await fetchAvatar(formData);
//     // dispatch(uploadAvatarSuccess(response.data.data));
//   } catch ({ response }) {
//     if (response.data.message === 'Unvalid token') {
//       //   await refresh(dispatch, getState);
//       //   const response = await fetchAvatar(formData);
//       //   dispatch(uploadAvatarSuccess(response.data.data));
//     } else {
//       //   dispatch(uploadAvatarError(response.data.message));
//       //   Alert(response.data.message);
//     }
//   }
// };

// const fetchAvatar = formData =>
//   axios.patch(
//     '/users/avatars',
//     formData
//     // {
//     // headers: {
//     //   'Content-Type': 'multipart/form-data',
//     // }
//     // }
//   );
