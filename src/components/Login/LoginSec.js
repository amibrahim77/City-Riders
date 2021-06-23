import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from "../Login/FirebaseConfig/firebaseConfig";
import firebaseConfig from './firebaseConfig'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const googleLogIn = () => {
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      var user = result.user;
     return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return errorMessage;
    });
};
///
export const githubLogin = () => {
  var provider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      return user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return errorMessage;
      // ...
    });
};
//Yahoo login

export const yahooLogin = () => {
  var yahooProvider = new firebase.auth.OAuthProvider("yahoo.com");
  return firebase
    .auth()
    .signInWithPopup(yahooProvider)
    .then((result) => {
      var user = result.user;
      return user;
    })
    .catch((error) => {
      // Handle error.
    });
};

//custom email and pass user register
export const customEmailPassReg = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      const newUser = {
        isSignedIn: true,
        displayName: user.displayName,
        email: user.email,
        photo: user.photoURL,
        error: "",
        success: "Congratulations! You have successfully registered",
        logError: "",
        logSuccess: "",
      };
      return newUser;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      const newUser = {
        isSignedIn: false,
        error: error.message,
      };
      return newUser;
    });
};

// loggin system with custom emal and pass
export const userLoginWithCustomEmail = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      const newUser = {
        isSignedIn: true,
        displayName: user.displayName,
        email: user.email,
        photo: user.photoURL,
        error: "",
        logSuccess: "Congratulations! You have successfully Login",
      };
      return newUser;
    })
    .catch((error) => {
      const newUser = {
        isSignedIn: false,
        logError: error.message,
      };
      return newUser;
    });
};
