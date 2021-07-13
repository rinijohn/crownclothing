import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-icon.svg'
import { connect } from 'react-redux';
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
            {/* {
                cartItems.map(cartItem =>(
                    itemCount+= cartItem.quantity
                    , 
                    console.log("++++++++",itemCount)))
            } */}
            {/* <span className='item-count'>{itemCount}</span> */}

        </div>
    )
}

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);