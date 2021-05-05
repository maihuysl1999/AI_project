import React from 'react';
import './Profile.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Profile = () => {
    return (
        <div className='profile'>
            <strong>HỒ SƠ ĐỐI TƯỢNG</strong>
            <Form>
                <Form.Group as={Row} id="field">
                    <Form.Label column="sm" sm="5">
                    <strong>Họ và tên</strong>
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} id="field">
                    <Form.Label column="sm" sm="5">
                    <strong>Ngày sinh</strong>
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} id="field">
                    <Form.Label column="sm" sm="5">
                    <strong>Quê quán</strong>
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} id="field">
                    <Form.Label column="sm" sm="5">
                    <strong>Số CMND</strong>
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} id="field">
                    <Form.Label column="sm" sm="5">
                    <strong>Số hiệu chuyến bay</strong>
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Button type="submit" className="submit-button">Lưu lại</Button> 
                <Button as="input" type="reset" value="Làm mới" className="reset-button"/>
            </Form>

            <strong>KẾT QUẢ</strong>

            <div className="result">
                Chuẩn đoán bằng phần mềm : 
            </div>
        </div>
    );
}

export default Profile;