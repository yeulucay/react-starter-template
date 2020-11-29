const INIT_STATE = {
  token: JSON.parse(localStorage.getItem('token')),
  initURL: '',
  authUser: JSON.parse(localStorage.getItem('user')),
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}