const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          firstName: action.firstName,
          lastName: action.lastName,
          company: action.company,
          email: action.email,
          pwd: action.pwd,
          img: action.img
        }
      ];
    default:
      return state;
  }
}

export default users;