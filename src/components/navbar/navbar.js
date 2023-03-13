import './navbar.scss'
export default function Navbar() {
    const pathname = window.location.pathname;
    const lastSlashIndex = pathname.lastIndexOf('/');
    const urlPart = pathname.substring(lastSlashIndex);
    let Home = 'navbar_home'
    let About = 'navbar_about'
    if (urlPart === '/about') {
        About = 'navbar_about_active'
    }
    if (urlPart === '/') {
        Home = 'navbar_home_active'
    }
    return (
        <ul className='navbar'>
            <li className={Home}><a href="/">Accueil</a></li>
            <li className={About}><a href="/about">A Propos</a></li>
        </ul>
    )
}