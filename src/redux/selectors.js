export const getContacts = state => state.contacts;

export const getFilter = state => {
  console.log(state);
  return state.filter.filter;
};
