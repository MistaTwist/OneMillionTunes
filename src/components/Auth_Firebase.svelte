<script>
import { 
  initializeApp, 
  getApps, 
  getApp
} from "firebase/app";
import { 
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  where,
  doc,
  addDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { outro_and_destroy_block } from "svelte/internal";

import {firebaseConfig} from "../lib/firebaseConfig"

// region initialise firebase App
if(getApps().length === 0) {
  //not initialised - do so now:
  const firebaseApp = initializeApp(firebaseConfig);
}
else {
  // get our initialised firebase app
  getApp();
}
// endregion initialise firebase App


const db = getFirestore(firebaseApp);

const q_latest = query(collection(db, "submittedTracks"), orderBy("dateSubmitted", "desc"), limit(20) );
</script>