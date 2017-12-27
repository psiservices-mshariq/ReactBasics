import React from 'react';
import {connect} from 'react-redux';
import UserListElement from './UserListElement';
class UserList extends React.Component{
	render(){
		return(
            <div>
            	<table>
       	     <thead>
       		<tr>
       			<th>Id</th>
       			<th>Username</th>
       			<th>Job</th>
       			<th>Edit</th>
       			<th>Delete</th>
       		</tr>
       	</thead>
       	<tbody>
       		{this.props.users.map((user, index) =>{
       			return(
       				<UserListElement key= {user.id} user={user}/>
       			);
       		})}
       	</tbody>
       </table>
            </div>
            
		);
	}
}
function mapStateToProps(state){
	return({
		users : state.users,
	});
}
export default connect(mapStateToProps) (UserList);