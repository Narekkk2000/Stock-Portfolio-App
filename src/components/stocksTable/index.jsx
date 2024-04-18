import { useState, useEffect } from "react";
import { getFormData } from "../../firebase/firebaseUtils/getFormData";
import StockItem from "./stockItem/StockItem";
import styles from "./stock-table.module.css";

const StockTable = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => getFormData(setStocks), []);

  return (
    <>
      <h1 className={styles.stock_table_title}>Stocks</h1>
      <table className={styles.stocks_table}>
        <thead>
          <tr>
            <th>Stock Ticker</th>
            <th>Stock Price</th>
            <th>Stock Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <StockItem key={stock.id} stock={stock} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StockTable;
