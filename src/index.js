import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {provider} from 'react-redux';

import App from "./components/App";
import {reducers} from './reducers/index';

// build the user list

	
    let users = [];
    for(let i=1; i<10; i++){
    	users.push({
    			id :i,
    			username : 'Magic' + i,
    			job : 'Employee' + i,
    		})
    	}
        
        // save the state in the users
        const initial_state = {
        	users :users,
        }


//create the store
const store = createStore(reducers, initial_state);

ReactDOM.render(
	<provider>
	  <App/> 
	</provider>, 
	document.getElementById('app')
);


