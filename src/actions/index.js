let nextCanzoneId = 0;
export const addCanzone = titolo => ({
  type: "ADD",
  id: nextCanzoneId++,
  rating: 5,
  title: titolo
});
