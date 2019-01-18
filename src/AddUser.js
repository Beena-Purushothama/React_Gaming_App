import React, {Component} from 'react';

class AddUser extends Component{
  state = {
    firstName : '',
    lastName : "",
    userName : "",
    played :0
  }

handleChange = (field ,event) => {
  const value = event.target.value;
  console.log("field"+field);
  this.setState(() => ({[field] : value}))
}

handleSubmit = () => {
   const {firstName,lastName,userName,played} = this.state;
		this.props.addUser({firstName : firstName,lastName : lastName, userName : userName, played :played })
}
  render(){
    
    const {firstName,lastName,userName,played} = this.state;
  	return (
    <div style={{width: "40%", float:"left", paddingTop:"20px"}}>
    <form>
      <div >
      
        <label>
         First name: <input type="text" value={firstName} onChange={(e) => (this.handleChange("firstName",e))}/><br/>
        </label>
        <label>
         Last name: <input type="text" title="Last Name" value={lastName} onChange={(e) => (this.handleChange("lastName",e))} /><br/>
        </label>
        <label>
         User name: <input type="text" title="User Name" value={userName} onChange={(e) => (this.handleChange("userName",e))} /><br/>
        </label>
      </div>
	  <button type="button"  onClick={this.handleSubmit} >Add</button>
    </form>
    </div>
    );

  }

}

export default AddUser;