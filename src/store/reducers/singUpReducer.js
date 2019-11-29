const initState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  phoneNumber:'',
  redirectToLogin:false
};
const signUpReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_USER' :
      console.log('user added', action.user);
      return {
        ...state,
        redirectToLogin: true
      }

    case 'ADD_USER_ERR' :
      console.log('user add error', action.err);
      return state;
    default:
      return state;
  }

}

export default signUpReducer;
