import React from 'react';
import UserCard from '../components/UserCard';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.getUsers = this.getUsers.bind(this)
    this.sortAsc = this.sortAsc.bind(this)
    this.sortDesc = this.sortDesc.bind(this)
  }

  sortAsc(){
    let sorted = this.state.users.sort((a, b) => new Date(b.dob.date)  - new Date(a.dob.date))
    this.setState({ users: sorted })
  }

  sortDesc(){
    let sorted = this.state.users.sort((a, b) => new Date(a.dob.date)  - new Date(b.dob.date))
    this.setState({ users: sorted })
  }

  getUsers(){
    fetch(`https://randomuser.me/api/?results=20&nat=us,ca&inc=gender,name,location,dob,picture`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ users: body.results })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getUsers();
  }

  render(){
    let userCards = this.state.users.map((user) => {
      return(
        <UserCard
          key={user.name.last}
          firstName={user.name.first}
          lastName={user.name.last}
          gender={user.gender}
          country={user.location.country}
          dob={user.dob.date}
          profilePicture={user.picture.large}
        />
      )
    })
    return(
      <div>
        <p className="ml-5">Sort by age:</p>
        <ButtonGroup className="ml-5 regular-text" aria-label="sorting-buttons">
          <Button variant="primary" onClick={this.sortAsc}>Asc</Button>
          <Button variant="primary" onClick={this.sortDesc}>Desc</Button>
        </ButtonGroup>
        <div className="users-container">
          {userCards}
        </div>
      </div>
    )
  }
}

export default UsersContainer;