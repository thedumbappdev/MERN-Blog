import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a href="#!" className="navbar-item">Home</a>
                        <a href="#!" className="navbar-item">About Us</a>
                        <a href="#!" className="navbar-item">Contact Us</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
