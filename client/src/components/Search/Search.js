import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientList from './page/PatientList';


function Search() {
    const [patientList, setPatientList] = useState([]);

    useEffect(() => {
        async function fetchPatientList() {
            try {
                const requestUrl = 'http://localhost:3001/profileInfo';
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });
                console.log("hello");
                const { data } = responseJSON;
                setPatientList(data);
            } catch (error) {
                console.log('Fail to fetch post list: ', error.message);
            }
        }
        fetchPatientList();
    }, [])

    return (
        <div>
            <Form inline className='form_search'>
                <Form.Group>
                    <Form.Label column="sm" sm="1">
                        <strong>Họ Tên</strong>
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label column="sm" sm="1">
                        <strong>CMND</strong>
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label column="sm" sm="1">
                        <strong>Ngày</strong>
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control size="sm" type="text" />
                    </Col>
                </Form.Group>
                <Button type="submit">Search</Button>
            </Form>
            <div className="title_result">
                <h5>Kết quả tìm kiếm</h5>
            </div>
            <div className="search_result">
                <PatientList posts = {patientList}/>
            </div>
        </div>
    );
}

export default Search;