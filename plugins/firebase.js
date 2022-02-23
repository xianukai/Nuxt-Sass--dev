import firebase from 'firebase'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.length) {
  firebase.initializeApp(config)
}

export default firebase