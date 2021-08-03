import { createSelector } from "reselect"
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;


const COLLECTION_MAP_ID = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCatergory = memoize(categoryId => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_MAP_ID[categoryId])
))