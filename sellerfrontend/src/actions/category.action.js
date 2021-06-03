import axios from "../helpers/axios";
import { categoryConstansts } from "./constants";
//fetch all categories
export const getAllCategory = ()=>{
    return async dispatch => {

        dispatch({ type:categoryConstansts.GET_ALL_CATEGORIES_REQUEST});
        const res = await axios.get(`catogory/getcat`);
        console.log('dewwwwww');
        console.log(res);
        console.log('dewwwwww111');
        if(res.status === 201){
            console.log('dewwwwww222');
            const { categorylist } = res.data;
            console.log('dewwwwww33');
            dispatch({
                type:categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload:{ categories: categorylist }
            });
        }else{
            console.log('dewwwwww44');
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
               payload:{ error:res.data.error } 
            });
        }
    
    }
}
//add categories function
export const addCategory = (form) => {
    return async dispatch => {
        dispatch({ type: categoryConstansts.ADD_NEW_CATEGORY_REQUEST});
       // console.log(res);
        const res = await axios.post(`/catogory/create`,form);
        if(res.status === 201){
            dispatch({
                type:categoryConstansts.ADD_NEW_CATEGORY_SUCCESS,
                payload:{ category:res.data.category}
                //payload:res.data.category
            });
        }else{
            dispatch({
                type:categoryConstansts.ADD_NEW_CATEGORY_FAILURE,
                payload:res.data.error
            });
        }
        //console.log(res);
        }
}