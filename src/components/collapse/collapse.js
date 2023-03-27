import './collapse.scss'
import Arrow from '../../assets/arrow.png'
import React, { useState } from 'react';
export default function Collapse({ title, content }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggle = () => {
        setIsCollapsed(!isCollapsed);
    };
    let listItems = content;
    if (typeof content === "object" && content !== null) {
        // Convertir l'objet en tableau de paires clé-valeur
        const entries = Object.entries(content);
        listItems = entries.map(([key, value]) => (
            <li key={key}>
                {value}
            </li >
        ));
    }

    return (
        <div className="collapse-container">
            <div className="collapse-header" onClick={toggle}>
                <h3>{title}</h3>
                <img src={Arrow} alt='Arrow Collapse' className={isCollapsed ? 'arrowUp' : 'arrowDown'}></img>
            </div>
            {isCollapsed && <div className={isCollapsed ? 'visible_content' : 'hidden_content'}>{listItems}</div>}
        </div>
    )
}