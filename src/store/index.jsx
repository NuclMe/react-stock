import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

const headers = {
    'content-type': 'application/json'
}

export {store};