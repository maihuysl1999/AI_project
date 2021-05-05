import React from 'react';
import './Sidebar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Button className='button-fix' >Nhập Lại</Button>
            <Button className='button-fix' >Danh sách nghi ngờ</Button>
        </div>
    );
}

export default Sidebar;