export const addToCart = (dog, amount) => ({
  type: "ADD_TO_CART",

  payload: {dog, amount}
});

export const removeFromCart = (dogId) => ({
  type: "REMOVE_FROM_CART",

  payload: dogId,
});

export const incrementAmount = (dogId) => ({
  type: 'INCREMENT_AMOUNT',
  payload: dogId,
});

export const decrementAmount = (dogId) => ({
  type: 'DECREMENT_AMOUNT',
  payload: dogId,
});