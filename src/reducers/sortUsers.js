const sortUsers = (state = [], action) => {
  switch (action.type) {
    case 'NAME':
      return state.sort((a, b) => {
        return `${a.firstName} ${a.lastName}` - `${b.firstName} ${b.lastName}`;
      });
    case 'CREATED_AT':
      return state.sort((a, b) => {
        return a.createdAt - b.createdAt
      });
    default:
      return state;
  }
}

export default sortUsers;