import { SET_INPUT_TEXT, ADD_TODO, DELETE_TODO, UPDATE_TODO_INPUT } from "./constants";

const initialState = {
	todos: [],
	todoInput: '',
};

function reducer(state, action) {
	switch (action.type) {
		case SET_INPUT_TEXT:
			return {
				...state,
				todoInput: action.payload
			};
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
				todoInput: '',
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			};
		case UPDATE_TODO_INPUT:
			return {
				...state,
				todoInput: action.payload,
			};
		default:
			return state;
	}
}

export { initialState };
export default reducer;
