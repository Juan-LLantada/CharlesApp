import {combineReducers} from 'redux';
import navRedux from './Navigation';
import selectedProduct from './SelectedProduct';
import uploadValues from './UploadPhoto'
export default (store = combineReducers({navRedux, selectedProduct,uploadValues}));
