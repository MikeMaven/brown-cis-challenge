import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';

class AppNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false
    }
    this.showSuccess = this.showSuccess.bind(this)
    this.hideSuccess = this.hideSuccess.bind(this)
  }

  showSuccess(event){
    event.preventDefault();
    
    setTimeout(this.hideSuccess, 3000)
    this.setState({showAlert: true})
  }

  hideSuccess(){
    this.setState({showAlert: false})
  }

  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Nav>
            <Navbar.Brand href="/">Brown CIS Challenge</Navbar.Brand>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="mailto:mikemaven@gmail.com?Subject=You're%20Hired!">Hire Mike (It's the right choice)</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline onSubmit={this.showSuccess}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="salary-input">$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Salary"
                aria-label="Salary"
                aria-describedby="salary-input"
              />
            </InputGroup>
          </Form>
        </Navbar>
        <Alert show={this.state.showAlert} variant="success">
          Thanks! We've sent Mike your offer. (Just kidding. You'll have to email him.)
        </Alert>
      </div>
    )
  }
}

export default AppNav;