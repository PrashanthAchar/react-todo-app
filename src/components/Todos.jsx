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
                this.props.todos.map(todo => {
                    return <Todo item={todo} />
                })
             }
             </ul>
         </div>
        )
    }
}