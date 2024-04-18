import { useState, useEffect } from "react";
import { saveFormData } from "../../../firebase/firebaseUtils/saveFormData";
import { validateForm } from "../../../utils/validateForm";
import { getStockData } from "../../../service/apiService";
import StockItem from "./stockItem/StockItem";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./add-stock.module.css";

const AddStock = () => {
  const [formData, setFormData] = useState({
    stockTicker: '',
    stockPrice: '',
    stockQuantity: '',
  });
  const [stocks, setStocks] = useState(null);
  const [selectedStock, setSelectedStock] = useState({
    stockTicker: '',
    stockPrice: ''
  })
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { stockTicker, stockPrice, stockQuantity } = formData;
  const {selectedStockTicker, selectedStockPrice} = selectedStock

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFormData(formData, setFormData)
  };
  

  const handleSelectStock = (symbol) => {
    const selectedStockData = stocks.find((stock) => stock.symbol === symbol);
    if (selectedStockData) {
      setSelectedStock({ stockTicker: selectedStockData.symbol, stockPrice: selectedStockData.latestPrice });
      setFormData({
        ...formData,
        stockTicker: selectedStockData.symbol,
        stockPrice: selectedStockData.latestPrice.toString(), 
      });
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockData = await getStockData(stockTicker);
        setStocks(stockData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    if (stockTicker) {
      fetchData();
    }
  }, [stockTicker]);

  useEffect(() => {
    if (stockTicker) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [stockTicker]);

  useEffect(() => {
    setShowSuggestions(false);
  }, [selectedStock]);
  
  
  

  console.log("formData", formData);
  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <div className={styles.header_form_inputs_wrapper}>
        <div className={styles.first_row}>
          <Input
            type="text"
            name="stockTicker"
            placeholder="Write ticker"
            value={stockTicker}
            onChange={handleInputChange}
            required
          />
          {showSuggestions && (
            <div className={styles.ticker_suggestions}>
              {stocks &&
                stocks.map((stock) => (
                  <StockItem key={stock.symbol} stock={stock}  onClick={handleSelectStock}/>
                )) }
            </div>
          )}
        </div>
        <div className={styles.second_row}>
          <Input
            type="number"
            name="stockPrice"
            placeholder="Price"
            value={stockPrice}
            onChange={handleInputChange}
            required
          />
          <Input
            type="number"
            name="stockQuantity"
            placeholder="Quantity"
            value={stockQuantity}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default AddStock;
