import styles from "./CardHome1.module.css"
import CardTitle from "../CardTitle/CardTitle"
import Paragraph from "../Paragraph/Paragraph"
import Link from "../Link/Link"

const Card = ({imageLeft, imageSrc, title, paragraph, linkText, linkHref}) => {
    return(
        <article className={`${imageLeft === true ? styles.imageLeft : styles.imageRight} ${styles.card}`}>
            <img className={styles.cardImg} src={imageSrc}/>
            <div className={styles.cardContent}>
                <CardTitle text={title}/>
                <Paragraph text={paragraph}/>
                <Link href={linkHref} text={linkText}/>
            </div>
        </article>
    )
}

export default Card