import React from 'react';
import { connect } from 'react-redux';
import { selectCatergory } from '../../redux/shop/shop.selectors';
import PreviewItem from '../../components/preview-item/preview-item-component';
import './catergory.styles.scss'

const CatergoryPage = ({ collection }) => {
    const {title, items} = collection;
    return(
    <div className='category'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <PreviewItem key={item.id}/>)
            }
        </div>
    </div>)
}

const mapStateToProps =(state, ownProps) =>({        //state- the overall state, ownProps- the props sent in by CatergoryPage component
    collection: selectCatergory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CatergoryPage);