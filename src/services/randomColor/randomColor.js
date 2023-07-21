// export function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const backgroundColor = [
  '#FED057',
  '#FFD8D0',
  '#FFB627',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
  '#FFD8D0',
  '#6D1C77',
];

export const color = () => {
  return backgroundColor.map(el => el);
};
