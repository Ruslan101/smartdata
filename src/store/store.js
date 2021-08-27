import { createStore } from 'redux';
import activePage_Reducer from './reducers/activePage_Reducer';

const store = createStore(activePage_Reducer);

export default store;

//store.subscribe(() => console.info(store.getState())) // Для отладки :D