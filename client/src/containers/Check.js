import React, {Component} from "react";
import Sidebar from '../components/Sidebar/Sidebar';
import Dropbox from "../components/Dropbox/Dropbox";
import Profile from '../components/Profile/Profile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../components/Image/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  input: '',
  imageUrl: '',
  result: ''
}

class Check extends Component {

  constructor() {
    super();
    this.state = initialState;
  }
  

  onInputChange = (event) => {
    var string = event.target.value;
    var link_value = string.split("/");
    var link ='https://drive.google.com/uc?id=' + link_value[5];
    this.setState({input: link});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    const {  imageUrl } = this.state;
    let link = 'image_url=' + imageUrl;
    fetch('http://127.0.0.1:5000/predict',{
      method: 'POST',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: link
    }).then(response => response.json())
    .then(data => this.setState({ result: data.result })); 
  }

  render() {
    const {  imageUrl } = this.state;
    return (
      <div className='page'>
        
        <Row>
          <Col xs={2}><Sidebar/></Col>
          <Col xs={7}>
            <Dropbox
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <Image imageUrl={imageUrl} />
          </Col>
          <Col xs={3}><Profile result={this.state.result}/></Col>
        </Row>
        
      </div>
    );
  }
}
export default Check;