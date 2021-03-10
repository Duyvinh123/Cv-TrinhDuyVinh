import React from 'react'
import './Header.css'
import MenuSelection from './MenuSeclection'

const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__avatar">
                    <img src="./image/img1.jpg" alt="" />
                </div>
                <h1>Trịnh Duy Vinh</h1>
                <p>  Fresher/intern Front-End</p>
            </div>
            <div className="header__nav">
                <MenuSelection />
            </div>
        </div>
    )
}

export default Header
