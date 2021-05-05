import React from "react";
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Navigation from './Nav/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search/Search';

function SearchPatient() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className='page'>
      
      <Row>
        <Col xs={2}><Sidebar/></Col>
        <Col xs={10}><Search/></Col>
      </Row>
      
    </div>
  );
}

export default SearchPatient;