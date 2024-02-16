import styles from './CardTitle.module.css'

const CardTitle = ({text}) => {
    return <h2 className={styles.cardTitle}>{text}</h2>
}

export default CardTitle