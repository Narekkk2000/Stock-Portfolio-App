import React from "react";

const StockItem = ({ stock }) => {
  const {stockTicker, stockPrice, stockQuantity } = stock;
  return (
    <tr>
      <td>{stockTicker}</td>
      <td>{stockPrice}</td>
      <td>{stockQuantity}</td>
    </tr>
  );
};

export default StockItem;
