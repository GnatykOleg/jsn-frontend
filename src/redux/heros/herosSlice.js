import { createSlice } from '@reduxjs/toolkit';
import {
  fetchHeros,
  addHero,
  deleteHero,
  updateHero,
} from './heros-operations';

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

//

const herosSlice = createSlice({
  name: 'heros',
  initialState,
  extraReducers: {
    //ЗАГРУЗКА ВСЕХ ГЕРОЕВ
    [fetchHeros.pending]: (state, _) => {
      console.log('Грузим Геров');
      return (state = {
        isLoading: true,
      });
    },
    [fetchHeros.fulfilled]: (state, { payload }) => {
      return (state = {
        items: payload,
        isLoading: false,
      });
    },
    [fetchHeros.rejected]: (state, { payload }) => {
      console.log('Ошибка загрузки героев');
      return (state = {
        error: payload.message,
        isLoading: false,
      });
    },
    //
    // [fetchHeros.fulfilled]: ({ items }, { payload }) => [...items, payload],
    //
    [addHero.pending]: (state, _) => {
      console.log('Грузим Добавление Героя');
      return (state = {
        isLoading: true,
      });
    },
    // [addHero.fulfilled]: (state, { payload }) => {
    //   return (state.items = [...state.items, payload]);
    // },
    [addHero.fulfilled]: (state, { payload }) => {
      state = {
        isLoading: false,
        items: payload.result,
      };
    },
    [addHero.rejected]: (state, { payload }) => {
      console.log('Ошибка Добавления Героя');
      return (state = {
        error: payload.message,
        isLoading: false,
      });
    },
    //
    [deleteHero.pending]: (state, _) => {
      console.log('Грузим Удаление');
      return (state = {
        isLoading: true,
      });
    },
    [deleteHero.fulfilled]: (state, { payload }) => {
      console.log('Удалили');

      return (state = {
        items: state.items?.filter(({ id }) => id !== payload),
      });
    },
    [deleteHero.rejected]: (state, { payload }) => {
      console.log('Ошибка Удаления героев');
      return (state = {
        error: payload.message,
        isLoading: false,
      });
    },
    //
    [updateHero.pending]: (state, action) => {
      console.log('Грузим Редактирование');
      return (state = {
        isLoading: true,
      });
    },
    // [updateHero.fulfilled]: (state, { payload }) => {
    //   console.log('Отредактировали');
    //   return (state = {
    //     items: state.items?.filter(({ id }) => id !== payload),
    //   });
    // },
    [updateHero.rejected]: (state, { payload }) => {
      console.log('Ошибка Редактирования героя');
      return (state = {
        error: payload.message,
        isLoading: false,
      });
    },
  },
  //   ЭТО ОБНОВЛЕНИЕ ГЕРОЯ ЕГО НУЖНО ДЕЛАТЬ ПО ФАКТУ
  //   [updateHero.fulfilled]: (state, { payload }) =>
  //       state.filter(({ id }) => id !== payload),
  //   },
});

export default herosSlice.reducer;
