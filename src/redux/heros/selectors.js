export const getAllHeros = state => state.heros.items;
export const loadingSelector = state => state.heros.isLoading;
//  [addHero.fulfilled]: (state, { payload }) => {
//       if (payload.length > 0) {
//         state.items = payload;
//       }
//     },
