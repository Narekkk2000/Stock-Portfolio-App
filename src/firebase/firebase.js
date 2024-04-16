import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // your config object
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };




