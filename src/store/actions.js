import { SET_INPUT_TEXT, ADD_TODO, DELETE_TODO } from './constants';


export const setInputText = (payload) => {
	return {
		type: SET_INPUT_TEXT,
		payload
	};
}

export const addTodo = (payload) => {
	return {
		type: ADD_TODO,
		payload
	};
}

export const deleteTodo = (payload) => {
	return {
		type: DELETE_TODO,
		payload
	};
}
