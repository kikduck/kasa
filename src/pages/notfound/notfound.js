import './notfound.scss'
import Header from '../../components/layout/header/header'
import Footer from '../../components/layout/footer/footer'
export default function notfound() {
    return (
        <div className='notfound'>
            <Header />
            <h1>404</h1>
            <Footer />
        </div>
    )
}