import React, { useState } from 'react'
import './ToggleColor.css'
import { setTheme } from './SetTheme'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Toggle = () => {

    const [toggle, setToggle] = useState(true)
    return (
        <div className={`toggle ${toggle? 'show' : null}`}>
            {
                !toggle ?
                    <div className="toggle__contents">
                        <h2>CHANGE STYLE</h2>
                        <div className="toggle__Buttons">
                            <button className="toggle__button" onClick={() => setTheme('theme-light')} >Light Color</button>
                            <button className="toggle__button" onClick={() => setTheme('theme-dark')} >Dark Color</button>
                        </div>
                    </div>
                    :
                    <div className="toggle__contents">
                    <h2>CHANGE STYLE</h2>
                    <div className="toggle__Buttons">
                        <button className="toggle__button" onClick={() => setTheme('theme-light')} >Light Color</button>
                        <button className="toggle__button" onClick={() => setTheme('theme-dark')} >Dark Color</button>
                    </div>
                </div>
            }
            <div className="toggle__open">
                {
                    toggle ?
                        <div className="arrow" onClick={() => setToggle(false)}>
                            <ArrowForwardIosIcon />
                        </div>
                        :
                        <div className="arrow show__icon" onClick={() => setToggle(true)}>
                            <ArrowBackIosIcon />
                        </div>
                }
            </div>
        </div>
    )
}

export default Toggle
