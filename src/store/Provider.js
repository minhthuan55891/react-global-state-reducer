import React, { useReducer } from 'react';
import StoreContext from './Context';
import reducer, { initialState } from './reducer';


function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
}

export default Provider;
