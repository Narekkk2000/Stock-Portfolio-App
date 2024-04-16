import styles from './button.module.css'

const Button = ({type, text}) => {
  return (
    <button className={styles.shared_button} type={type}>{text}</button>
  )
}

export default Button