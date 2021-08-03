import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyBgmR3x8z_Rzl1FUi2KfahcVras-7WY6SU',
    authDomain: 'dvs-firegram.firebaseapp.com',
    projectId: 'dvs-firegram',
    storageBucket: 'dvs-firegram.appspot.com',
    messagingSenderId: '815348409588',
    appId: '1:815348409588:web:cadfcc50e992ec99982aa1',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
