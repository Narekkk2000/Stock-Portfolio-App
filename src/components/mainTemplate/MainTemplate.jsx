import Header from "../header/Index";
import StockTable from "../stocksTable";
import styles from "./main-template.module.css";

const MainTemplate = () => {
  return (
    <div className={styles.main_wrapper}>
      <Header />
      <main>
        <div className={styles.main_content_wrapper}>
          <StockTable />
        </div>
      </main>
    </div>
  );
};

export default MainTemplate;
