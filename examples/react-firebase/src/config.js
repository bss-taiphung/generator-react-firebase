/**
 * NOTE: This file is ignored from git tracking. In a CI environment it is
 * generated by firebase-ci or build/create-config.js based on config in
 * .firebaserc (see .travis.yml). This is done so that environment specific
 * settings can be applied.
 */

export const env = 'development'

// Config for firebase
export const firebase = {
  apiKey: 'AIzaSyCTUERDM-Pchn_UDTsfhVPiwM4TtNIxots',
  authDomain: 'redux-firebasev3.firebaseapp.com',
  databaseURL: 'https://redux-firebasev3.firebaseio.com',
  projectId: "redux-firebasev3",
  storageBucket: 'redux-firebasev3.appspot.com'
}

// Config for react-redux-firebase
// For more details, visit http://react-redux-firebase.com/docs/api/enhancer.html
export const reduxFirebase = {
  userProfile: 'users', // root that user profiles are written to
  enableLogging: false, // enable/disable Firebase Database Logging
  // updateProfileOnLogin: false // enable/disable updating of profile on login
  // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
}

export default { env, firebase, reduxFirebase }
