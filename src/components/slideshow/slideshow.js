import './slideshow.scss'
import ArrowLeft from '../../assets/arrow_left.png'
import ArrowRight from '../../assets/arrow_right.png'
import { useState } from 'react'

export default function Slideshow({ pictures }) {
    const [img, setImg] = useState(0)
    let listItems = []
    if (typeof pictures === "object" && pictures !== null) {
        // Convertir l'objet en tableau de paires clé-valeur
        const entries = Object.entries(pictures);
        for (let i = 0; i < entries.length; i++) {
            listItems.push(entries[i][1]);
        }
    }
    let length = listItems.length

    const previousImage = () => {
        //console.log("changement")
        setImg(img - 1)
        if ((img === 0) || img < 1) {
            setImg(listItems.length - 1)
            //console.log(listItems.length)
        }
        //console.log(img)
    }
    const nextImage = () => {
        //console.log("changement")
        setImg(img + 1)
        if ((img === length - 1) || img > length - 1) {
            setImg(0)
        }
        //console.log('lenght' + length)
        //console.log(img)

    }
    return (
        <div className='slideshow_container'>
            <img className='image' src={listItems[img]} alt='housing'></img>
            <img className='arrowLeft arrow' src={ArrowLeft} alt='left arrow' onClick={previousImage}></img>
            <img className='arrowRight arrow' src={ArrowRight} alt='right arrow' onClick={nextImage}></img>
            <p className='count'>{img + 1} / {length}</p>
        </div>
    )
}