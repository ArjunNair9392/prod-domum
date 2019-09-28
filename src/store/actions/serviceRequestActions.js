export const createServiceRequest = (serviceRequest) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      console.log('in serviceRequestAction');
      console.log(serviceRequest);
      const firestore = getFirestore();
      var date = new Date();
      firestore.collection('serviceRequest').add({
          creationTime: date,
          date: serviceRequest.date,
          description: serviceRequest.description,
          location: serviceRequest.location,
          permission: serviceRequest.permission,
          problem: serviceRequest.problem,
          time: serviceRequest.time,
          userId: serviceRequest.userId
      }).then(() => {dispatch({
          type: 'Create_Request', 
          serviceRequest: serviceRequest
      });
  }).catch((err) => {dispatch({
      type: 'Create_Request_Err', 
      err: err
  });
})
      
     
  }
};