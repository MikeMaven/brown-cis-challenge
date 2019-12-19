import React from 'react';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch(`https://randomuser.me/api/?results=20&nat=us,ca&inc=gender,name,location,dob`)
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
    return(
      <div>
      </div>
    )
  }
}

export default UsersContainer;