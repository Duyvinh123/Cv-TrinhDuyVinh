import React from 'react'
import './About.css'
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <div className="about__me">
                    <div className="about__info">
                        <div className="about__info--left">
                            <div className="about__title">
                                <h3 className="about__title--item"><PersonIcon className="about__info--icon" />  A LITTLE ABOUT ME</h3>
                            </div>

                            <div className="about__text">
                                <p>Hello. I am <span>Vinh</span> .</p>
                                <p>I want to be a good Front-End developer.</p>
                                <p>I will always try to <span>improve</span> my knowledge.</p>
                            </div>
                        </div>
                        <div className="about__info--right">

                            <div className="about__title">
                                <h3 className="about__title--item">Objective</h3>
                            </div>
                            <p>- Get a lot of knowledge</p>
                        </div>
                    </div>



                    <div className="about__skills">
                        <div className="about__title">
                            <h3 className="about__title--item"><CodeIcon className="about__info--icon" /> Skills</h3>
                        </div>
                        <div className="about__items">
                            <div className="about__item">
                                <img src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="HTML icon" />
                                <h3>HTML</h3>
                                <p></p>
                            </div>
                            <div className="about__item">
                                <img src="https://img.flaticon.com/icons/png/512/919/919826.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="HTML icon" />
                                <h3>CSS</h3>
                                <p></p>
                            </div>
                            <div className="about__item">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="HTML icon" />
                                <h3>JavaScript</h3>
                                <p>HTML DOM, ES6, Rest API, Axios</p>
                            </div>
                            <div className="about__item">
                                <img src="https://img.flaticon.com/icons/png/512/919/919851.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="HTML icon" />
                                <h3>ReactJs</h3>
                                <p>React Hook, Style Component, Redux</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
