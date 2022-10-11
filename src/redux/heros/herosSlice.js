import { createSlice } from '@reduxjs/toolkit';

import {
  fetchHeros,
  addHero,
  deleteHero,
  updateHero,
  findHeroById,
} from './heros-operations';

const initialState = {
  items: null,
  hero: null,
  isLoading: false,
  error: null,
};

const herosSlice = createSlice({
  name: 'tasks',
  initialState,
  // Добавляем обработку внешних экшенов
  extraReducers: {
    // ЗАГРУЗКА ВСЕХ ГЕРОЕВ

    [fetchHeros.pending](state, _) {
      state.isLoading = true;
    },
    [fetchHeros.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchHeros.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
    // ДОБАВЛЕНИЕ ГЕРОЯ

    [addHero.pending](state, _) {
      state.isLoading = true;
    },
    [addHero.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [addHero.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
    // НАХОДИМ ГЕРОЯ

    [findHeroById.pending](state, _) {
      state.isLoading = true;
    },
    [findHeroById.fulfilled](state, { payload }) {
      state.items = state.items?.filter(({ _id }) => _id === payload);
      state.isLoading = false;
    },
    [findHeroById.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
    // УДЯЛЯЕМ ГЕРОЯ

    [deleteHero.pending](state, _) {
      state.isLoading = true;
    },
    [deleteHero.fulfilled](state, { payload }) {
      state.items = state.items?.filter(({ _id }) => _id !== payload);
      state.isLoading = false;
    },
    [deleteHero.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },

    // ОБНОВЛЯЕМ ГЕРОЯ
    [updateHero.pending](state, _) {
      state.isLoading = true;
    },
    [updateHero.fulfilled](state, { payload }) {
      console.log('payloadUPD', payload);

      // state.items = state.items?.filter(({ _id }) => _id === payload);
      state.items = [payload];
      state.isLoading = false;
    },
    [updateHero.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
  },
});

export default herosSlice.reducer;
