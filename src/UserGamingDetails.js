import React, {Component} from 'react';
import UserList from './UserList';

class UserGamingDetails extends Component{
  
  usersDetails = () => { 
    return (this.props.users.map((user)=>(`${user.userName} played ${user.played} games.`))
           );
  }


  render(){
    const {Users} = this.props;
  	return (
      <div style={{width : "60%", float:"right"}}>
      	<h2> User Gaming Data</h2>
      	<button style={{display:"block", margin:"auto",fontSize: "medium"}}>Hide the number of games played</button>
      	<UserList usersDetails={this.usersDetails()}/>
      </div>
    
    );
  }

}

export default UserGamingDetails;