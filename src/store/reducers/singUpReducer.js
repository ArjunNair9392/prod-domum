const initState = {};
const signUpReducer = (state = initState, action) => {
  switch(action.type){
    case 'Add_User' :
      console.log('user added', action.user);
let v =  Object.assign({}, action.user)

v.redirectToLogin = true;
return v;

    case 'Add_User_Err' :
      console.log('user add error', action.err);
      return state;
    default:
      return state;
  }

}

export default signUpReducer;
