import { createSelector } from "reselect";

const selectCart = state => state.cart;         //input selector

export const selectCartItems = createSelector(   //output selector - takes two arguments
    [selectCart],       //An array of input selectors
    cart => cart.cartItems      //A function that will return a required value from the input selector/selectors                
)

export const selectCartItemsCount = createSelector( //an output selctor that uses another output selector
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedCountValue, cartItem) =>
        accumulatedCountValue + cartItem.quantity,
        0
        )
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedPriceValue, cartItem) => 
        accumulatedPriceValue + cartItem.quantity * cartItem.price,
        0
    )
)