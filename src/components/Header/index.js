import React from 'react';
import {IconContext} from "react-icons";
import * as FaIcon from 'react-icons/fa';
import * as FiIcon from 'react-icons/fi';

const Header = props => {
    return (
        <header>
            <div className="columns is-desktop py-1">
                <div className="column is-size-6 is-half">
                    <IconContext.Provider value={{ style: {fontSize: '18px' }}}>
                        <span className="pr-1"><FaIcon.FaPhone /> +91 7003845817</span>
                        <span className="pl-1"><FaIcon.FaEnvelope /> <a href="mailto:kapat.dip@gmail.com">kapat.dip@gmail.com</a></span>
                    </IconContext.Provider>
                </div>

                <div className="column is-half has-text-right">
                    <IconContext.Provider value={{ style: {fontSize: '20px'}}}>
                        <a href="#!" className="px-1"><FaIcon.FaFacebookF /></a>                            
                        <a href="#!" className="px-1"><FaIcon.FaTwitter /></a>
                        <a href="#!" className="px-1"><FaIcon.FaInstagram /></a>
                        <a href="#!" className="px-1"><FaIcon.FaLinkedinIn /></a>
                    </IconContext.Provider>
                </div>
            </div>
        </header>
    );
}

export default Header;
