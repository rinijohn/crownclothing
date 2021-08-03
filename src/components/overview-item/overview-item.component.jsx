import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'
import PreviewCollection from '../preview/preview.component'
import './overview-item.styles.scss'

const OverviewItem = ({ collections }) => (
    <div className='overview-item'>
        {
            collections.map(({id, ...otherPreviewCollections}) => (
                <PreviewCollection key={id} {...otherPreviewCollections}/>
            ))
        }
    </div>

)

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(OverviewItem);