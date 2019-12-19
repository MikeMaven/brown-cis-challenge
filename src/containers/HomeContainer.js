import React from 'react';
import AppNav from '../components/AppNav';
import Hero from '../components/Hero';
import UsersContainer from './UsersContainer';


class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="app-main">
        <AppNav/>
        <Hero/>
        <UsersContainer/>
      </div>
    )
  }
}

export default HomeContainer;