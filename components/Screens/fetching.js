import { db } from "../../firebaseconfig/firebase";
import { doc,getDoc } from "firebase/firestore";
export async function getFire() {
  try {
    
    const docRef = doc(db, "images","all");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()
    return data;
  } catch (error) {
    return new Error("something went Wrong")
  }
}