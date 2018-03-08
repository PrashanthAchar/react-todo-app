import React,{Component} from 'react';

export default class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Todo>>"+this.props.message);
        let isStrike=this.props.message =='strike'?'line-through' : 'none';

        return(
            <li key={this.props.item.id}
            style={{textDecoration:isStrike}}
            >

            {this.props.item.todo}
            </li>
        )
    }
}