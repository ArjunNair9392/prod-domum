export const updateVehicleInfo = (vehicleInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    var vehicleNumber = [];
    var parkingNumber = [];
    var vehicleMakeAndModel = [];

    for (var i = 0; i < vehicleInfo.length; i += 1) {
      vehicleNumber.push(vehicleInfo[i].vehicleNumber);
      parkingNumber.push(vehicleInfo[i].parkingNumber);
      vehicleMakeAndModel.push(vehicleInfo[i].vehicleMakeAndModel);
    };

    firestore.collection("vehicleInfo").where("userId", "==", "test1234")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            // Build doc ref from doc.id
            firestore.collection("vehicleInfo").doc(doc.id).update({
              vehicleNumber: vehicleNumber,
              parkingNumber: parkingNumber,
              vehicleMakeAndModel: vehicleMakeAndModel
            });
            dispatch({ type: 'UPDATE_VEHICLE_INFO_SUCCESS', vehicleInfo});
        });
    }).catch((err) => {
      dispatch({ type: 'CUPDATE_VEHICLE_INFO_ERROR', err});
    })
  }
};
