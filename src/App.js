
import { useStore, actions } from './store';

import './App.css';

function App() {
  const { state, dispatch } = useStore();
  console.log('========================> state ', state);

  const handleAddTodo = () => {
    dispatch(actions.addTodo({
      id: Date.now(),
      text: state.todoInput,
    }));
  }
  const handleDelete = (id) => {
    dispatch(actions.deleteTodo(id));
  }
  return (
    <div>
      {/* <input value={state.inputText} onChange={(e) => dispatch({ type: constants.SET_INPUT_TEXT, payload: e.target.value })} /> */}
      <input value={state.todoInput} onChange={(e) => dispatch(actions.setInputText(e.target.value))} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
