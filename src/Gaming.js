import React, {Component} from 'react';
import UserGamingDetails from './UserGamingDetails';
import AddUser from './AddUser.js';

class Gaming extends Component{
  state = {
  	users :[]
  }

  addUser = (user) => {
    console.log("gaming.js"+this.state.users)
    this.setState({users: [...this.state.users, user]})
    
  }

  render(){
  	return (
      <div style={{display : "block"}}>
        <AddUser addUser={this.addUser}/> 
        <UserGamingDetails users={this.state.users}/>
      </div>
    );
  }

}

export default Gaming;