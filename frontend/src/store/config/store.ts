import { legacy_createStore as createStore} from 'redux'
// reducer层的拆离
import config_reducer from './reducers';
const config_store = createStore(config_reducer);

export default config_store;