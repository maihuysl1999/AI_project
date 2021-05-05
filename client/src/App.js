import React from "react";
import Sidebar from './components/Sidebar/Sidebar';
import "./App.css";
import Footer from './components/Footer/Footer';
import Dropbox from "./components/Dropbox/Dropbox";
import Profile from './components/Profile/Profile';
import Navigation from './components/Nav/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/Search';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className='page'>
      <Navigation/>
      <Row>
        <Col xs={2}><Sidebar/></Col>
        <Col xs={7}><Search/></Col>
        {/* <Col xs={3}><Profile/></Col> */}
      </Row>
      <Footer/>
    </div>
  );
}

export default App;
