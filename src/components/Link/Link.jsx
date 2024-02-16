import styles from './Link.module.css'

const Link = ({href, text}) => {
    return <a href={href} className={styles.link}>{text}</a>
}

export default Link