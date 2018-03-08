import React, {Component} from 'react';

export default class TodoInput extends Component{
	constructor(props){
		super(props);
	}

    render(){
    	console.log(this.props);
        return(
            <div>
                 <input type='text'
                 		onChange= {e=>this.props.onTextChange(e.target.value)}                   		
                 		value={this.props.todoData.message}/>
                 <button 
                 		onClick={()=>this.props.addTodo(this.props.todoData.message)}>
                 	Add Todo
                 </button> <br/>
            </div>
        )
    }
};