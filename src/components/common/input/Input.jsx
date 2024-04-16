import styles from "./input.module.css";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
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
