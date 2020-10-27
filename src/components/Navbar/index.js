import React from 'react';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <div className="navbar-start is-size-5">
                        <a href="#!" className="navbar-item">Home</a>
                        <a href="#!" className="navbar-item">About</a>
                        <a href="#!" className="navbar-item">Contact</a>
                    </div>
                    {/* <div className="navbar-end">
                        <div class="navbar-item">
                            <IconContext.Provider value={{ style: {fontSize: '20px'}}}>
                                <a href="#!" className="px-1"><FaIcon.FaFacebookF /></a>                            
                                <a href="#!" className="px-1"><FaIcon.FaTwitter /></a>
                                <a href="#!" className="px-1"><FaIcon.FaInstagram /></a>
                                <a href="#!" className="px-1"><FaIcon.FaLinkedinIn /></a>
                            </IconContext.Provider>
                        </div>
                    </div> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
