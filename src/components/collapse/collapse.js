import './collapse.scss'
import Arrow from '../../assets/arrow.png'
import React, { useState } from 'react';
export default function Collapse({ title, content }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggle = () => {
        setIsCollapsed(!isCollapsed);
    };
    //
    return (
        <div className="collapse-container">
            <div className="collapse-header" onClick={toggle}>
                <h3>{title}</h3>
                <img src={Arrow} alt='Arrow Collapse' className={isCollapsed ? 'arrowUp' : 'arrowDown'}></img>
            </div>
            {isCollapsed && <div className={isCollapsed ? 'visible_content' : 'hidden_content'}>{content}</div>}
        </div>
    )
}