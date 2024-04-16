import { useState } from "react";
import { saveFormData } from "../../../firebase/firebaseUtils/saveFormData";
import { validateForm } from "../../../utils/validateForm";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./add-stock.module.css";

const AddStock = () => {
  const [formData, setFormData] = useState({
    stockName: "",
    stockTicker: "",
    stockPrice: "",
    stockQuantity: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      saveFormData(formData, setFormData);
    }
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <Input
        type="text"
        name="stockName"
        placeholder="Write Stock Name"
        value={formData.stockName}
        onChange={handleInputChange}
        required
      />
      <Input
        type="text"
        name="stockTicker"
        placeholder="Write ticker"
        value={formData.stockTicker}
        onChange={handleInputChange}
        required
      />
      <Input
        type="number"
        name="stockPrice"
        placeholder="Price"
        value={formData.stockPrice}
        onChange={handleInputChange}
        required
      />
      <Input
        type="number"
        name="stockQuantity"
        placeholder="Quantity"
        value={formData.stockQuantity}
        onChange={handleInputChange}
        required
      />
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default AddStock;
