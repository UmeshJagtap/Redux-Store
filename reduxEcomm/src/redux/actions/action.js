// add items
export const ADD = (item) => {
  return {
    type: 'ADD_CART',
    payload: item,
  };
};

// remove items
export const DEL = (id) => {
  return {
    type: 'RMV_CART',
    payload: id,
  };
};
