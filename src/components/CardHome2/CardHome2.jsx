import styles from "./CardHome2.module.css"
import CardTitle from "../CardTitle/CardTitle"
import Paragraph from "../Paragraph/Paragraph"
import Button from "../Button/Button"

const Card = ({imageLeft, imageSrc, title, paragraph, buttonText}) => {
    return(
        <article className={`${imageLeft === true ? styles.imageLeft : styles.imageRight} ${styles.card}`}>
            <img className={styles.cardImg} src={imageSrc}/>
            <div className={styles.cardContent}>
                <CardTitle text={title}/>
                <Paragraph text={paragraph}/>
                <Button text={buttonText}/>
            </div>
        </article>
    )
}

export default Card