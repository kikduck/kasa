import './slideshow.scss'
import ArrowLeft from '../../assets/arrow_left.png'
import ArrowRight from '../../assets/arrow_right.png'
import { useState, useEffect } from 'react'

export default function Slideshow({ pictures }) {
    const [img, setImg] = useState(0);
    const [one, setOne] = useState(false);
    let listItems = []
    if (typeof pictures === "object" && pictures !== null) {
        // Convertir l'objet en tableau de paires clé-valeur
        const entries = Object.entries(pictures);
        for (let i = 0; i < entries.length; i++) {
            listItems.push(entries[i][1]);
        }
    }
    let length = listItems.length
    useEffect(() => {
        if (length === 1) {
            setOne(true)
        }
    }, [length])

    const previousImage = () => {
        setImg(img - 1)
        if ((img === 0) || img < 1) {
            setImg(listItems.length - 1)
        }
    }
    const nextImage = () => {
        setImg(img + 1)
        if ((img === length - 1) || img > length - 1) {
            setImg(0)
        }

    }
    return (
        <div className='slideshow_container'>
            <img className='image' src={listItems[img]} alt='housing'></img>
            <img className='arrowLeft arrow' src={ArrowLeft} alt='left arrow' onClick={previousImage} style={{ display: one ? "none" : "initial" }}></img>
            <img className='arrowRight arrow' src={ArrowRight} alt='right arrow' onClick={nextImage} style={{ display: one ? "none" : "initial" }}></img>
            <p className='count' style={{ display: one ? "none" : "flex" }}>{img + 1} / {length}</p>
        </div >
    )
}