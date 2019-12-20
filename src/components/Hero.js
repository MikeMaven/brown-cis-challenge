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
        <Toast className="hire-toast bg-primary" onClose={() => this.showToast()} show={this.state.show} delay={3000} autohide>
          <Toast.Header className="bg-primary" closeButton={false}>
            <span className="text-white regular-text">Woohoo!</span>
          </Toast.Header>
          <Toast.Body className="regular-text">
            Thanks, we've sent your offer to Mike! (Just kidding, you'll have to email him.)
          </Toast.Body>
        </Toast>
        <Jumbotron className="bg-transparent">
          <h1 className="emphasized-text">Hello, Brown University!</h1>
          <p className="regular-text">
            Welcome to my app, which collects randomly generated user data from the Random User Generator public API, and displays it here in a fun and friendly way of viewing it.
          </p>
          <Button onClick={this.showToast} variant="success" className="emphasized-text">
            Hire Mike
          </Button>
        </Jumbotron>
      </div>
    )
  }
}

export default Hero;