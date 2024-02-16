import styles from './Filter.module.css'
import Link from '../Link/Link'

const Filter = () => {
    return (
        <div class={styles.filter}>
            <Link text="Todos" href="/"/>
            <Link text="Gráfico" href="/"/>
            <Link text="UX" href="/"/>
            <Link text="Photo" href="/"/>
        </div>
    )
}

export default Filter