import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return(
        <div>
            <Navbar className="navbar" fixed='top'>
                <Logo/>
                <Navbar.Brand className="nav-link">CHUẨN ĐOÁN COVID VÀ VIÊM PHỔI</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Navigation;