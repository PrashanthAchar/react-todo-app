import {ADD_TODO, TODO_TEXT_CHANGE} from "../types/todoTypes.js";
let nextInt=1;
export const addTodo = (text) => {
	console.log("Action AddTodo triggered");
	return ({type:ADD_TODO, text, id:nextInt++});
}

export const onTextChange = (text)=>{
	console.log("Action onTextChange triggered")
	return ({type:TODO_TEXT_CHANGE, text});
}