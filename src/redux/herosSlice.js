import { createSlice } from '@reduxjs/toolkit';
import {
  fetchHeros,
  addHero,
  deleteHero,
  // updateHero
} from './heros/heros-operations';

const initialState = {
  nickName: null,
  realName: null,
  images: null,
  originDescription: null,
  superpowers: null,
  catchPhrase: null,
  favorite: null,
  createdAt: null,
  updatedAt: null,
  _id: null,
};

//

const herosSlice = createSlice({
  name: 'heros',
  initialState,
  extraReducers: {
    [fetchHeros.fulfilled]: (_, { payload }) => payload,
    [addHero.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteHero.fulfilled]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
  //   ЭТО ОБНОВЛЕНИЕ ГЕРОЯ ЕГО НУЖНО ДЕЛАТЬ ПО ФАКТУ
  //   [updateHero.fulfilled]: (state, { payload }) =>
  //       state.filter(({ id }) => id !== payload),
  //   },
});

export default herosSlice.reducer;
