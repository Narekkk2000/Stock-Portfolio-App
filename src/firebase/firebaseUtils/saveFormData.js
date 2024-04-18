import { db } from "../firebase";
import { set, ref } from "firebase/database";
import { uniqueId } from "../../utils/uniqueId";

export const saveFormData = (formData, setFormData) => {
  const stockKey = formData.stockTicker.toLowerCase().replace(/ /g, "");
  const dbRef = ref(db, "stocks/" + stockKey);

  set(dbRef, {
    id: uniqueId(),
    stockTicker: formData.stockTicker,
    stockPrice: formData.stockPrice,
    stockQuantity: formData.stockQuantity,
  })
    .then(() => {
      console.log("Data saved successfully.");
      setFormData({
        stockTicker: "",
        stockPrice: "",
        stockQuantity: "",
      });
    })
    .catch((error) => {
      console.error("Error writing data to Firebase:", error);
    });
};
