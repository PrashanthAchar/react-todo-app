import React, {Component} from 'react';
import TodoInput from '../components/TodoInput.jsx';
import Todos from '../components/Todos.jsx';

import {ADD_TODO} from "../types/todoTypes";

import {connect} from "react-redux";
import {addTodo, onTextChange} from "../actions/todoActions";

import {bindActionCreators} from "redux";

class App extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p>Welcome to React Application</p>
                <TodoInput  {...this.props}/> <br/>
                <Todos {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    todoData:state.todoData
});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
            {
                addTodo:addTodo,
                onTextChange:onTextChange
            },
            dispatch
        );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
