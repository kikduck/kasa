import './home.scss'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Catalog from '../../components/catalog/catalog'
export default function home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Catalog />
        </div>
    )
}