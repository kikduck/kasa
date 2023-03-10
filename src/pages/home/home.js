import './home.scss'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
export default function home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
        </div>
    )
}