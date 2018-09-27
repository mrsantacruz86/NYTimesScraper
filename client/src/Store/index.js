import { createStore } from 'redux';
import reducer from '../reducers';

export default createStore(reducer, window.STATE_FROM_SERVER);
