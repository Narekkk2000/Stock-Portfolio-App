import { db } from "../firebase";
import { set, ref } from "firebase/database";
import { uniqueId } from "../../utils/uniqueId";

export const saveFormData = (formData, setFormData) => {
  const stockKey = formData.stockName.toLowerCase().replace(/ /g, "");
  const dbRef = ref(db, "stocks/" + stockKey);

  set(dbRef, {
    id: uniqueId(),
    stockName: formData.stockName,
    stockTicker: formData.stockTicker,
    stockPrice: formData.stockPrice,
    stockQuantity: formData.stockQuantity,
  })
    .then(() => {
      console.log("Data saved successfully.");
      setFormData({
        stockName: "",
        stockTicker: "",
        stockPrice: "",
        stockQuantity: "",
      });
    })
    .catch((error) => {
      console.error("Error writing data to Firebase:", error);
    });
};
