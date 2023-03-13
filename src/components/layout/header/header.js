import './header.scss'
import Logo from '../../../assets/logo.png'
import Navbar from '../../navbar/navbar'

export default function Header() {
    return (
        <header className='header'>
            <h1>
                <a href='/'><img src={Logo} alt="Kasa, location d’appartements entre particuliers en France"></img></a>
            </h1>
            <Navbar />
        </header>
    )
}