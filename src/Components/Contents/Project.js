import React from 'react'
import './Project.css'
import EcoIcon from '@material-ui/icons/Eco';
import NearMeIcon from '@material-ui/icons/NearMe';

const Project = ({ data }) => {

    return (
        <div className='project'>
            <div className="project__content">
                <div className="project__title">
                    <h3> <EcoIcon className="project__icon" /> MY PROJECT</h3>
                </div>
                <div className="project__items">

                    {
                        data.map((data, index) => {
                            return (
                                <div className="project__item" key={index} >
                                    <a href={`${data.image}`} >
                                        <div className="project__container__img">
                                            <span className="project__items--icon"><NearMeIcon className="project__item--icon"/></span>
                                            <img className="project__image" src={`./image/img${data.id}.jpg`} alt="" />
                                        </div>
                                    </a>
                                    <h4>{data.title}</h4>
                                    <p>{data.language}</p>
                                </div>
                            )
                        })
                    }




                </div>
            </div>
        </div>
    )
}

export default Project
