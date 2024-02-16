import styles from './Paragraph.module.css'

const Text = ({text}) => {
    return <p className={styles.paragraph}>{text}</p>
}

export default Text