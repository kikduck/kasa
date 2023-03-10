import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../../components/navbar/navbar'

export default function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} alt="Kasa, location d’appartements entre particuliers en France"></img>
            </h1>
            <Navbar />
        </header>
    )
}