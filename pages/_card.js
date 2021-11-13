import styles from '../styles/Card.module.css'

export default function Card(props) {
  return (
    <div className={styles.cardContainer} onClick={()=>{window.location.href = "https://" + props.url}}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.text}>{props.text}</p>
      <p className={styles.link}>{props.link}</p>
    </div>
  );
}
