export const createMarketPlace = (marketPlace) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('marketPlace').add({
      ...marketPlace,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SOCIAL_FEEDS_SUCCESS', marketPlace});
    }).catch((err) => {
      dispatch({ type: 'CREATE_SOCIAL_FEEDS_ERROR', err});
    })
  }
};
