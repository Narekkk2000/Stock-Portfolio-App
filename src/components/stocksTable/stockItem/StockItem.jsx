import React from "react";

const StockItem = ({ stock }) => {
  const { stockName, stockTicker, stockPrice, stockQuantity } = stock;
  return (
    <tr>
      <td>{stockName}</td>
      <td>{stockTicker}</td>
      <td>{stockPrice}</td>
      <td>{stockQuantity}</td>
    </tr>
  );
};

export default StockItem;
