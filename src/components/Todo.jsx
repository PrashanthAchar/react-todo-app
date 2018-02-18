import React,{Component} from 'react';

export default class Todo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li key={this.props.item.id}>{this.props.item.todo}</li>
        )
    }
}