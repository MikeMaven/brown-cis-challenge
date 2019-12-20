import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showToast = this.showToast.bind(this)
  }

  showToast(){
    this.setState({show: !this.state.show })
  }

  render(){
    return(
      <div>
        <Toast className="hire-toast bg-success" onClose={() => this.showToast()} show={this.state.show} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            Woohoo!
          </Toast.Header>
          <Toast.Body>
            Thanks, we've sent your offer to Mike! (Just kidding, you'll have to email him.)
          </Toast.Body>
        </Toast>
        <Jumbotron className="bg-transparent">
          <h1>Hello, Brown University!</h1>
          <p>
            Welcome to my app, which will collect randomly generated user data from the Random User Generator public API, and display it here in a fun and friendly way of viewing it.
          </p>
          <Button onClick={this.showToast} variant="success">
            Hire Mike
          </Button>
        </Jumbotron>
      </div>
    )
  }
}

export default Hero;