import React, {Component} from 'react';

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
        let list = this.state.todos.map((todo) =>{
             return <li key={todo.id}>{todo.todo} </li>
        });        
        return (
            <div>
                <p>Welcome to React Application</p>
                <input type='text' onChange={this.onTextChange} value={this.state.message}/>
                <button onClick={this.addTodo}>Add Todo</button> <br/>

                <ul>
                 {list}   
                </ul>
            </div>
        )
    }
}

export default App;
