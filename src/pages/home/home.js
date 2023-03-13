import './home.scss'
import Header from '../../components/layout/header/header'
import Banner from '../../components/banner/banner'
import Catalog from '../../components/catalog/catalog'
import Footer from '../../components/layout/footer/footer'
export default function home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Catalog />
            <Footer />
        </div>
    )
}