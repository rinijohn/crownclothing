import React from 'react';
import PreviewCollection from '../../components/preview/preview'
import SHOP_DATA from './shoppage.data'

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return (
            <div className="shop-page" >
                {
                    this.state.collections.map(({id, ...otherPreviewCollections}) => (
                        <PreviewCollection key={id} {...otherPreviewCollections}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;