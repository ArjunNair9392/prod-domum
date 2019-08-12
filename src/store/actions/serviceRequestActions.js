export const createServiceRequest = (serviceRequest) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('serviceRequest').add({
      ...serviceRequest,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SERVICE_REQUEST_SUCCESS', serviceRequest});
    }).catch((err) => {
      dispatch({ type: 'CREATE_SERVICE_REQUEST_ERROR', err});
    })
  }
};
