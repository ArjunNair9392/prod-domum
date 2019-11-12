export const updateApartmentInfo = (apartmentInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection("apartmentInfo").where("userId", "==", "test1234")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            // Build doc ref from doc.id
            firestore.collection("apartmentInfo").doc(doc.id).update({apartmentNumber: apartmentInfo.apartmentNumber});
            dispatch({ type: 'UPDATE_APARTMENT_INFO_SUCCESS', apartmentInfo});
        });
    }).catch((err) => {
      dispatch({ type: 'CUPDATE_APARTMENT_INFO_ERROR', err});
    })
  }
};
