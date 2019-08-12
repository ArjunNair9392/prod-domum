export const addUser = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log('in signUpAction');
        console.log(user);
        //Async call to DB
        const firestore = getFirestore();
        firestore.collection('users').add({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }).then(() => {dispatch({
            type: 'Add_User', 
            user: user
        });
    }).catch((err) => {dispatch({
        type: 'Add_User_err', 
        err: err
    });
})
        
       
    }
};