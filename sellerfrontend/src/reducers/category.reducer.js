import { categoryConstansts } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};
//build new categories.
const buildNewCategories = (parentid,categories, category) => {
    let myCategories = [];

    if(parentid == undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug:category.slug,
                children:[]
            }
        ]
    }
    
    for(let cat of categories){

        if( cat._id == parentid){
            myCategories.push({
                ...cat,
                children:cat.children ? buildNewCategories(parentid,[...cat.children, {
                    _id:category._id,
                    name:category.name,
                    slug:category.slug,
                    parentid:category.parentid,
                    children:category.children
                }], category):[]
        });
        }else{
            myCategories.push({
                ...cat,
                children:cat.children  ? buildNewCategories(parentid,cat.children, category):[]
        });

        }

      
    }

    return myCategories;
}

export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories 
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;
            const updatedCategories = buildNewCategories(category.parentid,state.categories, category);

            console.log('updated categories',updatedCategories);
            state = {
                ...state,
                categories: updatedCategories,
                loading: false
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState,

            }
            break;
    }

    return state;
}