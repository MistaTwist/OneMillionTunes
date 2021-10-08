<script>
	import SubmitTune from "./components/SubmitTune.svelte";
	import SubmissionFeed from "./components/SubmissionFeed.svelte";
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
QuerySnapshot,
} from "firebase/firestore";
//import dotenv from 'dotenv';
//dotenv.config();

import { firebaseConfig } from './lib/firebaseConfig';

// firebaseConfig = {
//   apiKey: process.env.FRBS_APIKEY,
//   authDomain: process.env.FRBS_AUTH_DOMAIN,
//   projectId: process.env.FRBS_PROJECT_ID,
//   databaseURL: process.env.FRBS_DB_URL,
//   storageBucket: process.env.FRBS_STORAGE_BUCKET,
//   messagingSenderId: process.env.FRBS_MESSAGING_SENDER,
//   appId: process.env.APPID
// }

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(firebaseApp);
const collRef = collection(db, 'submittedTracks')

let submissions = [];

const unsubscribe = onSnapshot(collRef, (querySnapshot) => {
		let tracks = [];
		querySnapshot.forEach((doc) => {
			let track = { ...doc.data(), id: doc.id };
			tracks = [track, ...tracks];
		});
		submissions = tracks;
});

</script>

<main>
	<h1>One Million Tunes v0.1</h1>
	<p>I'm on a mission to see if I can find 1 million tunes that I like.</p>
	<p>Wanna help me find them? Just look up a tune from spotify below!</p>
	<SubmitTune />
	<SubmissionFeed submissions={submissions}/>
</main>

<style>
	:root {
		box-sizing: border-box;
		display: block;
		background: rgb(131,58,180);
		background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 100%, rgba(252,176,69,1) 100%);
	}
	p {
		font-weight: 400;
		font-size: large;
	}
	main {
		/*padding: 1em;
		*/
		max-width: 75%;
		margin: 0 auto;
		color: white;
	}
	
	h1 {
		font-size: 4em;
		font-weight: bolder;
		display: inline-block;
	}
</style>