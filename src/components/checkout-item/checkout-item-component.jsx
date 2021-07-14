import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

const ChekoutItem = ({ cartItem, clearItem, addItem, removeItem})=>{

    const { name, price, quantity, imageUrl } = cartItem;      //Destructuring cartItem in fuction call will not give access to cartItem as a whole,
                                                               //and the cartIem as a whole is needed for clearItemFromCart function, hence its destructed within the function.
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10007;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(ChekoutItem);