import React, {Component} from 'react';
import './Profile.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          address: '',
          idNo: '',
          planeId: '',
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
      }
    
    onAddressChange = (event) => {
        this.setState({address: event.target.value})
    }
    
    onIdNoChange = (event) => {
        this.setState({idNo: event.target.value})
    }

    onPlaneIdChange = (event) => {
        this.setState({planeId: event.target.value})
    }
    
    onSubmit = () => {
        fetch('http://localhost:3001/profileinput', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: this.state.name,
            address: this.state.address,
            idNo: this.state.idNo,
            planeId: this.state.planeId
          })
        })
        .then(response => response.json());
    }    

    render(){
        return (
            <div className='profile'>
                <strong>HỒ SƠ ĐỐI TƯỢNG</strong>
                <Form className = 'form_profile' >
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>Họ và tên</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='name' onChange={this.onNameChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>Quê quán</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='address' onChange={this.onAddressChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>Số CMND</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='idNo' onChange={this.onIdNoChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>Số hiệu chuyến bay</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='planeId' onChange={this.onPlaneIdChange}/>
                        </Col>
                    </Form.Group>
                    <Button type="submit" className="submit-button" onClick={this.onSubmit}>Lưu lại</Button> 
                    <Button as="input" type="reset" value="Làm mới" className="reset-button"/>
                </Form>
    
                <strong>KẾT QUẢ</strong>
    
                <div className="result">
                    Chuẩn đoán : {this.props.result}
                </div>
            </div>
        );
    }
}

export default Profile;