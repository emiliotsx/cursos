import Link from 'next/link'
import styles from './Navigation.module.css'

const LINKS = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' }
]

export const Navigation = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navigation}>
        {LINKS.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
