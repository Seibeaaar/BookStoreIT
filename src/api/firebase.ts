import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

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

const storage = getStorage(app);

const getHomeContent = async () => {
  const homeContentCollection = collection(db, 'homeContent');
  const collectionSnapshot = await getDocs(homeContentCollection);
  return collectionSnapshot.docs[0].data();
};

const getArticles = async () => {
  const articlesCollection = collection(db, 'articles');
  const collectionSnapshot = await getDocs(articlesCollection);
  const processedArticles = await Promise.all(
    collectionSnapshot.docs.map(async (doc) => {
      const docData = doc.data();
      const articleImageRef = ref(storage, docData.image);
      const imageUrl = await getDownloadURL(articleImageRef);
      return {
        id: doc.id,
        ...docData,
        image: imageUrl,
      };
    })
  );
  return processedArticles;
};

export default {
  getHomeContent,
  getArticles,
};
