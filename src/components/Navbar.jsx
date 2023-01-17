import { Link } from 'react-router-dom'

const styles = {
    navbar: {width: '100%', height: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 3rem'},
    ul_links: {display: 'flex', justifyContent: 'flex-end', alignItems: 'center', listStyleType: 'none'},
    link: {marginLeft: '1rem'}
}

// Navigation bar component - the application header, allows users to navigate through the application pages.
function Navbar() {
    return (
        <nav className="Navbar" style={styles.navbar}>
            <Link to={'/'} className='text-dark text-decoration-none'>
                <h2>TechStore</h2>
            </Link>
            <ul style={styles.ul_links}>
                <li style={styles.link}><Link to={'/'}>Home</Link></li>
                <li style={styles.link}><Link to={'/items'}>Items</Link></li>
                <li style={styles.link}><Link to={'/add-item'}>Add Item</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
