import styles from "./input.module.css";

const Input = ({ type, name, placeholder, value, onChange }) => {

  return (
    <input
    style={{width: name === 'stockTicker' ? '400px' : '100px'}}
      className={styles.shared_input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
