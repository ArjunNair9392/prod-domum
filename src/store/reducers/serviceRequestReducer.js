const initState = {};
const createRequestReducer = (state = initState, action) => {
  switch(action.type){
    case 'Create_Request' :
      console.log('Request Created', action.serviceRequest);
      return state;
    case 'Create_Request_Err' :
      console.log('Request Creation error', action.serviceRequest);
      return state;
    default:
      return state;   
  }
  
}

export default createRequestReducer;
