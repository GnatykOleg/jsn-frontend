import { createSlice } from '@reduxjs/toolkit';
import {
  fetchHeros,
  addHero,
  deleteHero,
  // updateHero
} from './heros-operations';

const initialState = {
  items: [],
};

//

const herosSlice = createSlice({
  name: 'heros',
  initialState,
  extraReducers: {
    [fetchHeros.pending]: (_, action) => console.log('Loading'),
    [fetchHeros.fulfilled]: (state, { payload }) => {
      return (state = {
        items: payload,
      });
    },
    // [fetchHeros.fulfilled]: ({ items }, { payload }) => [...items, payload],
    [addHero.fulfilled]: (state, { payload }) => [...state.items, payload],
    [deleteHero.fulfilled]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
  //   ЭТО ОБНОВЛЕНИЕ ГЕРОЯ ЕГО НУЖНО ДЕЛАТЬ ПО ФАКТУ
  //   [updateHero.fulfilled]: (state, { payload }) =>
  //       state.filter(({ id }) => id !== payload),
  //   },
});

export default herosSlice.reducer;
