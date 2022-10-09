import shortid from 'shortid';
export const items = [
  {
    id: shortid(),
    to: '/',
    text: 'home',
  },
  {
    id: shortid(),
    to: '/heros',
    text: 'heros',
  },
  {
    id: shortid(),
    to: '/heros/details-page',
    text: 'details',
  },
];
