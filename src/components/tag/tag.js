import './tag.scss'
import { useState } from 'react'

export default function Tag({ tags }) {
    let listItems
    if (typeof tags === "object" && tags !== null) {
        // Convertir l'objet en tableau de paires clé-valeur
        const entries = Object.entries(tags);
        listItems = entries.map(([key, value]) => (
            <li key={key}>
                {value}
            </li>
        ));
    }
    return (
        <div className='tag'>
            {listItems}
        </div>
    )
}