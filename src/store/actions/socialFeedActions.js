export const createSocialFeed = (socialFeeds) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('socialFeeds').add({
      ...socialFeeds,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SOCIAL_FEEDS_SUCCESS', socialFeeds});
    }).catch((err) => {
      dispatch({ type: 'CREATE_SOCIAL_FEEDS_ERROR', err});
    })
  }
};
