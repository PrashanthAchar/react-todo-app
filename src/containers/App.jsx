import React, {Component} from 'react';
import TodoInput from '../components/TodoInput.jsx';
import Todos from '../components/Todos.jsx';

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            message:'abc',
            todos:[],
            nextId:1
        }
    }

    onTextChange = (e) =>{
        let newMessage = e.target.value;
        if(newMessage !=='' && newMessage.length>0){
            this.setState({message:e.target.value});
        }
        
        console.log(this.state.message);
    }

    addTodo = () =>{
        if(this.state.message === ''){
            return;
        }
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id:this.state.nextId++,
                    todo:this.state.message,
                    completed:false
                }
            ]
        })
        this.setState({message:""});
        
    }

    render(){
        console.log(this.state.todos);
        return (
            <div>
                <p>Welcome to React Application</p>
                <TodoInput
                    message={this.state.message}
                    onTextChange = {this.onTextChange}
                    addTodo = {this.addTodo}
                /><br/>
                <Todos {...this.state}/>
            </div>
        )
    }
}

export default App;
