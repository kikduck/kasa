import './banner.scss'
import HomeBanner from '../../assets/home_cover.png'
export default function Banner() {
    return (
        <div className='banner'>
            <img src={HomeBanner} alt="Kasa, home cover"></img>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}