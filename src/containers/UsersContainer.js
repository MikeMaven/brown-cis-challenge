import React from 'react';
import UserCard from '../components/UserCard'

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch(`https://randomuser.me/api/?results=20&nat=us,ca&inc=gender,name,location,dob`,
      {
        mode: 'no-cors'
      }
    )
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

  render(){
    let userCards = this.state.users.map((user) => {
      return(
        <UserCard
          key={user.name}
          firstName={user.name.first}
          lastName={user.name.last}
          gender={user.gender}
          country={user.location.country}
          dob={user.dob.date}
        />
      )
    })
    return(
      <div>
        <div className="users-container">
          {userCards}
        </div>
      </div>
    )
  }
}

export default UsersContainer;