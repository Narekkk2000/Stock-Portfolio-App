import styles from "./stock-item.module.css";

const StockItem = ({ stock, onClick }) => {
  const { symbol, companyName, latestPrice } = stock;
const trimmedCompanyName = companyName.substring(0, 24) + (companyName.length > 26 ? '...' : '');


  return (
    <div className={styles.stock_item} onClick={() => onClick(symbol)}>
      <div className={styles.ticker_and_price}>
        <p className={styles.ticker_text}>{symbol}</p>
        <p className={styles.ticker_name}>{trimmedCompanyName}</p>
      </div>
      <span className={styles.ticker_price}>{latestPrice}$</span>
    </div>
  );
};

export default StockItem;
