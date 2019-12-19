import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Jumbotron className="bg-transparent">
          <h1>Hello, Brown University!</h1>
          <p>
            Welcome to my app, which will collect randomly generated user data from the Random User Generator public API, and display it here in a fun and friendly way of viewing it.
          </p>
          <Button variant="success">
            Hire Mike
          </Button>
        </Jumbotron>
      </div>
    )
  }
}

export default Hero;