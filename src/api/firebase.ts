import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCSH5lwObrjs5ahocWkSrYXC6GO1OnN1Gg',
  authDomain: 'bookstoreit-10def.firebaseapp.com',
  projectId: 'bookstoreit-10def',
  storageBucket: 'bookstoreit-10def.appspot.com',
  messagingSenderId: '928667679753',
  appId: '1:928667679753:web:8df93ad5e69bf77c078cd8',
  measurementId: 'G-2XDBEQC4LP',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getHomeContent = async () => {
  const homeContentCollection = collection(db, 'homeContent');
  const collectionSnapshot = await getDocs(homeContentCollection);
  return collectionSnapshot.docs[0].data();
};

export default {
  getHomeContent,
};
