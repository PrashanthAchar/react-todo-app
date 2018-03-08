import React, {Component} from 'react';
import Todo from './Todo.jsx';

export default class Todos extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
        <div>
            <ul>
            {
                this.props.todoData.todos.map(todo => {
                    return <Todo key={todo.id} item={todo} message={this.props.todoData.message}/>
                })
             }
             </ul>
         </div>
        )
    }
}