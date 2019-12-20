import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.dateOfBirth = this.dateOfBirth.bind(this)
    this.birthday = this.birthday.bind(this)
  }

  dateOfBirth(){
    return moment(this.props.dob, 'YYYY-MM-DDThh:mm:ssZ').format('MMMM Do YYYY')
  }

  birthday(){
    let bdayThisYear = moment().format("YYYY[-]") + moment(this.props.dob, 'YYYY-MM-DDThh:mm:ssZ').format("M[-]D")
    let evaluation = moment(bdayThisYear, 'YYYY-M-D').diff(moment(), 'days')

    if (evaluation === 0) {
      return "Today!"
    }
    else if (evaluation > 0) {
      return "Coming up!"
    }
    else {
      return "Has already passed. Sorry!"
    }
  }

  render(){
    let dob = this.dateOfBirth()
    let bday = this.birthday()
    return(
      <div>
        <Card className="h-100 col-sm-4 user-card" bg="dark" text="white">
          <Card.Img variant="top" src={this.props.profilePicture}/>
          <Card.Title className="emphasized-text">{this.props.firstName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted emphasized-text">{this.props.lastName}</Card.Subtitle>
          <Card.Text className="regular-text">
            {this.props.country}
          </Card.Text>
          <Card.Text className="regular-text">
            Gender: {this.props.gender}
          </Card.Text>
          <Card.Text className="regular-text">
            DOB: {dob}
          </Card.Text>
          <Card.Text className="regular-text">
            Birthday: {bday}
          </Card.Text>
        </Card>
      </div>
    )
  }
}

export default UserCard;