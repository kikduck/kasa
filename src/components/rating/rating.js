import './rating.scss'
import GreyStar from '../../assets/grey_star.png'
import RedStar from '../../assets/red_star.png'

export default function Rating({ rating }) {
    let allRating = []
    for (let i = 1; i <= rating; i++) {
        allRating.push(<li className='star' key={i}><img src={RedStar} alt='red star'></img></li>)
    }
    if (rating !== 5) {
        for (let i = 1; i <= 5 - rating; i++) {
            allRating.push(<li className='star' key={rating + i}><img src={GreyStar} alt='grey star'></img></li>)
        }
    }
    return (
        <ul className='stars'>{allRating}</ul>
    )
}
