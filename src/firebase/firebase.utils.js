import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBmMH6Z8Lx01sm-JHeagoEJacRuoVX17YY",
        authDomain: "crwn-clothing-22d76.firebaseapp.com",
        projectId: "crwn-clothing-22d76",
        storageBucket: "crwn-clothing-22d76.appspot.com",
        messagingSenderId: "482442284743",
        appId: "1:482442284743:web:17a0473c97d38e9cebb8e2"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;
        // console.log(firestore.doc('users/abcd1234'));
        // console.log(firestore.doc(`users/${userAuth.uid}`));
        console.log("userAuth->",userAuth);

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get(userRef);

        console.log(snapShot);

        if(!snapShot.exists){   //if user dosent exist
                const { displayName, email } = userAuth;
                const createdDate = new Date();

                try{
                await userRef.set({
                        displayName,
                        email,
                        createdDate,
                        ...additionalData}
                )
                }catch(err){
                        console.log('error!!',err.message);
                }
        }

        return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;