import {ADD_TODO, TODO_TEXT_CHANGE} from "../types/todoTypes.js";

const initialTodos = {
	message:"abc",
	todos:[],
	visibility : "SHOW_ALL",
}

export default (state=initialTodos, action) => {
		switch (action.type) {
			case ADD_TODO:
				return ({
							message:"",
							todos:[
								...state.todos,
							{
								id: action.id,
								todo:action.text,
								completed:false
							}]
						});
			case TODO_TEXT_CHANGE:
				return (
						{...state, message:action.text}
					); 	
			default:
				return state;
		}
}