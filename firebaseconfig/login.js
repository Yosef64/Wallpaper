// import {
//   getRedirectResult,
//   GoogleAuthProvider,
//   signInWithRedirect,
// } from "firebase/auth";
// import { auth ,provider} from "./firebase";


// export function loginAuth() {
//   signInWithRedirect(auth, provider);
//   getRedirectResult(auth)
//     .then((result) => {
      
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

      
//       const user = result.user;     
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// }
