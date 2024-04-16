import { getDatabase, ref, onValue } from "firebase/database";

export const getFormData = (setData) => {
    const db = getDatabase();
    const stocksRef = ref(db, "stocks");

    const unsubscribe = onValue(stocksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const stocksArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setData(stocksArray);
      } else {
        setData([]);
      }
    });

    return () => {
      unsubscribe();
    };
}

