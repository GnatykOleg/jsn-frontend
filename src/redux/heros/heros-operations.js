import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  'heros/deleteHero',
  async (id, { rejectWithValue, dispatch }) => {
    console.log('id', id);
    try {
      await axios.delete(`/heros/${id}`);
      dispatch(fetchHeros());

      // dispatch(userOperations.getUser());
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  'heros/updateHero',
  async (payload, { rejectWithValue }) => {
    console.log('payload в UpdateHero', payload);
    // console.log('id в операции', id);
    try {
      const { data } = await axios.put(`/heros/${payload._id}`, payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
