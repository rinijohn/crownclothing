import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item-component';
import CustomButton from '../custom-button/custom-button-component'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './card-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) =>(   //a default dispatch function is sent by connect if the second argument to it is not passed
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <span className='empty-message'>Your cart is empty!</span>
            }
        </div>
        <CustomButton onClick={()=>{ 
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }
        }
            >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))