import React from "react";
import UserList from "./UserList";
 

// app component
export default class App extends React.Component {
	

    render() {
    
    return(
       //<UserList users={this.state.users}/>
       <UserList/>
    );
  }
}
