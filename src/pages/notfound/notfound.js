import './notfound.scss'
import Header from '../../components/layout/header/header'
export default function notfound() {
    return (
        <div className='notfound'>
            <Header />
            <section className="error">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <a href="/">Retourner sur la page d'accueil</a>
            </section>
        </div>
    )
}