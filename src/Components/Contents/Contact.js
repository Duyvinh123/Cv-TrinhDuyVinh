import React from 'react'
import './Contact.css'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact__content">
                <div className="contact__info">
                    <div className="contact__title">
                        <h3 className="contact__title--item"><ContactPhoneIcon className="contact__title--icon" /> LET'S GET IN TOUCH</h3>
                    </div>
                    <h1 className="contact__name">Trịnh Duy Vinh</h1>
                    <div className="contact__text">
                        <div className="contact__avatar">
                            <img src="./image/img1.jpg" alt="" />
                        </div>
                        <div className="contact__text--items">
                            <div className="contact__text--left">
                                <p className="contact__text--item"><AlternateEmailIcon className="contact__item--icon" /> Duyvinh123.vt@gmail.com</p>
                                <p className="contact__text--item"><PhoneIcon className="contact__item--icon" /> 0353 916 983</p>
                                <p className="contact__text--item"><LocationOnIcon className="contact__item--icon" /> 1123 QL 1A, P,Tân Tạo, Quận Bình Tân, TP HCM</p>
                            </div>
                            <div className="contact__text--right">
                            <p className="contact__text--item"><FacebookIcon className="contact__item--icon" />https://www.facebook.com/profile.php?id=100006677118941</p>
                                <p className="contact__text--item"><GitHubIcon className="contact__item--icon" /> https://github.com/Duyvinh123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
