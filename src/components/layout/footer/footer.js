import './footer.scss'
import Logo from '../../../assets/logo_footer.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt="Kasa, location d’appartements entre particuliers en France"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}