import React, {Component} from 'react';

export default class TodoInput extends Component{

    render(){
        return(
            <div>
                 <input type='text' onChange={this.props.onTextChange} value={this.props.message}/>
                 <button onClick={this.props.addTodo}>Add Todo</button> <br/>
            </div>
        )
    }
};