import React from 'react';
import { Route } from 'react-router-dom'
import OverviewItem from '../../components/overview-item/overview-item.component'
import CatergoryPage from '../category/category.component';
const ShopPage = ({match})=>{      //The route from App.js send three values as part of props- shop, location, history
    
    // console.log('>>>>match', match)

    return(  
    <div className="shop-page" >
        <Route exact path={`${match.path}`} component={OverviewItem}/>
        <Route path={`${match.path}/:categoryId`} component={CatergoryPage}/>
    </div>
)};

export default ShopPage;