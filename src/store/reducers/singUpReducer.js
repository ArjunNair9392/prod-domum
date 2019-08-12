const initState = {};
const signUpReducer = (state = initState, action) => {
  switch(action.type){
    case 'Add_User' :
      console.log('user added', action.user);
      return state;
    case 'Add_User_Err' :
      console.log('user add error', action.err);
      return state;
    default:
      return state;   
  }
  
}

export default signUpReducer;
