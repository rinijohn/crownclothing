import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'     //Makes locale storage as our default storage area.

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']     //Cart items will now be persisted. We need not persist user here, since that is already managed by firebase.
}

const rootReducer = combineReducers ({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig, rootReducer)   //Modified version of rootReducer with persistance capabilities.