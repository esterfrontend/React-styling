import styles from './FooterContact.module.css'

const FooterContact = () => {
    return (
        <div className={styles.footerContact}>
            <a href="tel:+34600000000">600 000 000</a>
            <a href="mailto:nombreapellido@tailor-hub.com">nombreapellido@tailor-hub.com</a>
        </div>
    )
}

export default FooterContact