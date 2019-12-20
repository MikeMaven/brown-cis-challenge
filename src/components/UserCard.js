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
    return moment(this.props.dob).format('MMMM Do YYYY')
  }

  birthday(){
    let bdayThisYear = moment().format("YYYY[-]") + moment(this.props.dob).format("M[-]D")
    let evaluation = moment(bdayThisYear).diff(moment(), 'days')

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
        <Card className="user-card">
          <Card.Title>{this.props.firstName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.lastName}</Card.Subtitle>
          <Card.Text>
            {this.props.country}
          </Card.Text>
          <Card.Text>
            Gender: {this.props.gender}
          </Card.Text>
          <Card.Text>
            DOB: {dob}
          </Card.Text>
          <Card.Text>
            Birthday: {bday}
          </Card.Text>
        </Card>
      </div>
    )
  }
}

export default UserCard;