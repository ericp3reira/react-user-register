let userId = 0;

export const addUser = (user) => ({
  type: 'ADD_USER',
  id: userId++,
  user
});

export const sortUsers = (sortType) => ({
  type: 'SORT_USERS',
  sortType
})

export const validateField = (field) => ({
  type: 'VALIDATE_FIELD',
  field
});
