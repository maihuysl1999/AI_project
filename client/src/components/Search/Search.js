import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientList from './page/PatientList';
import Pagination from './page/Pagination';
import queryString from 'query-string';


function Search() {
    const [patientList, setPatientList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 0,
        _limit: 0,
        _totalRows: 0,
    })
    const [filters, setFilters] = useState({
        _limit: 2,
        _page: 1,
    })

    useEffect(() => {
        async function fetchPatientList() {
            try {
                const paramsString = queryString.stringify(filters);
                console.log(paramsString);
                const requestUrl = `http://localhost:3001/profileInfo?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });
                const { data} = responseJSON.data;
                setPatientList( data);
                setPagination(responseJSON.pagination);
            } catch (error) {
                console.log('Fail to fetch post list: ', error.message);
            }
        }
        fetchPatientList();
    }, [filters])

    function handlePageChange(newPage){
        console.log('New Page: ', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }

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
                <Pagination 
                pagination = {pagination}
                onPageChange = {handlePageChange}/>
            </div>
        </div>
    );
}

export default Search;