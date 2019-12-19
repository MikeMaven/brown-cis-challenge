import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



class AppNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Nav>
            <Navbar.Brand href="/">Show Me Ur Info</Navbar.Brand>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="mailto:mikemaven@gmail.com?Subject=You're%20Hired!">Hire Mike (It's the right choice)</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
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
      </div>
    )
  }
}

export default AppNav;