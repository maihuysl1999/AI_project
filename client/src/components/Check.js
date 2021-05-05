import React from "react";
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Dropbox from "./Dropbox/Dropbox";
import Profile from './Profile/Profile';
import Navigation from './Nav/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Check() {
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
        <Col xs={7}><Dropbox/></Col>
        <Col xs={3}><Profile/></Col>
      </Row>
      
    </div>
  );
}

export default Check;