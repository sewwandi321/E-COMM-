
import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import authReducer from './auth.reducers';
import productReducer from './product.reducer'
import categoryReducer from './category.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category:categoryReducer,
    product:productReducer,
   
    
});

export default rootReducer;