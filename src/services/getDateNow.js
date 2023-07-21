export const getMonthAndYear = () => {
  return {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };
};
