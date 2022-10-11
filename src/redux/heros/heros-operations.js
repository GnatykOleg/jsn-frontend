import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4000/api';

// Загрузка всех героев

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

// Добавление героя

export const addHero = createAsyncThunk(
  'hero/addHero',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/heros', payload);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Находим героя

export const findHeroById = createAsyncThunk(
  'heros/findHeroById',
  async (_id, { rejectWithValue, dispatch }) => {
    try {
      await axios.get(`/heros/${_id}`);
      // dispatch(fetchHeros());

      // dispatch(userOperations.getUser());
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Удаляем героя

export const deleteHero = createAsyncThunk(
  'heros/deleteHero',
  async (_id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/heros/${_id}`);
      dispatch(fetchHeros());

      // dispatch(userOperations.getUser());
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Обновляем героя ПРОВЕРЬ ОПЕРАЦИЮ

export const updateHero = createAsyncThunk(
  'heros/updateHero',
  async (
    {
      _id,
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      favorite,
    },
    { rejectWithValue }
  ) => {
    console.log('_idOperation', _id);
    try {
      const { data } = await axios.put(`/heros/${_id}`, {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        favorite,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addHero = createAsyncThunk(
//   'hero/addHero',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/heros', payload);

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
