import styles from './Footer.module.css'
import FooterTitle from "../FooterTitle/FooterTitle"
import FooterContact from "../FooterContact/FooterContact"
import SocialIcon from "../SocialIcon/SocialIcon"

import Behance from "../../resources/icons/Behance.svg"
import Instagram from "../../resources/icons/Instagram.svg"
import LinkedIn from "../../resources/icons/LinkedIn.svg"
import Medium from "../../resources/icons/Medium.svg"
import YouTube from "../../resources/icons/YouTube.svg"

const Footer = () => {
    return (
        <footer className={`${styles.footer} container`}>
            <FooterTitle />
            <div>
                <FooterContact />
                <div className={styles.socialContainer}>
                    <SocialIcon icon={ Medium } href="/"/>
                    <SocialIcon icon={ Behance } href="/"/>
                    <SocialIcon icon={ LinkedIn } href="/"/>
                    <SocialIcon icon={ YouTube } href="/"/>
                    <SocialIcon icon={ Instagram } href="/"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer