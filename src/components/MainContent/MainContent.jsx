import styles from './MainContent.module.css'

const MainContent = ({children}) => {
    return (
        <section className={`${styles.mainContent} container`}>
            {children}
        </section>
    )
}

export default MainContent