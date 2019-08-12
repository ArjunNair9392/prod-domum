const initState = {
  projects: [
    {id: '1', description: 'help me find peach', summary: 'blah blah blah'},
    {id: '2', description: 'collect all the stars', summary: 'blah blah blah'}
  ]
}

const submitServiceRequest = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_SERVICE_REQUEST_SUCCESS':
      console.log('create request success', action);
      return state;
    case 'CREATE_SERVICE_REQUEST_ERROR':
      console.log('create request errror', action.err);
      return state;
    default:
      return state;
  }
};

export default submitServiceRequest;
