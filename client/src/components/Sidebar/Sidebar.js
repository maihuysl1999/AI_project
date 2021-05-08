import React from 'react';
import './Sidebar.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Button className='button-fix' ><Link to="/" className='link-to'>Nhập Liệu</Link></Button>
            <Button className='button-fix' ><Link to="/search" className='link-to'>Danh sách nghi ngờ</Link></Button>
        </div>
    );
}

export default Sidebar;