import axios from "../helpers/axios";
import { productConstants } from "./constants";
//add product function 
export const addProduct = form => {
    return async dispatch => {
        const res = await axios.post(`product/create`,form);
        console.log(res);
    }
}

//fetch all products
const getproducts=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:productConstants.GET_ALL_PRODUCTS_REQUEST})
            const res =await axios.post(`product/getProducts`);
            if(res.status===200)
            {
                const{products}=res.data;
                dispatch({
                    type:productConstants.GET_ALL_PRODUCTS_SUCCESS,
                    paylosd:{products},

                });

            }
            else{
                dispatch({type:productConstants.GET_ALL_PRODUCTS_FAILURE});
            }
        }
        catch(error)
        {
            console.log(error);
        }
       

    };
};

//delete products using product id
export const deleteproductbyid=(payload)=>
{
    return async (dispatch)=>
    {
        try{

        const res =await axios.delete(`product/deleteProductById`, {
          date: { payload },
        });
        dispatch({type :productConstants.DELETE_REQUEST});
        if(res.status===202)
        {
            dispatch({type :productConstants.DELETE_SUCCESS});
            dispatch(getproducts());
        }
        else{
            const{ error}=res.data;
            dispatch({type:productConstants.GET_ALL_PRODUCTS_FAILURE,payload:{
                error,
            }});
            
           
        }

        }catch(error){
            console.log(error);
        }

         
    };
};
//update products using id
export const updateproductbyid=(payload)=>
{
    return async (dispatch)=>
    {
        try{

        const res =await axios.put(`product/updateProductById`, {
          date: { payload },
        });
        dispatch({type :productConstants.DELETE_REQUEST});
        if(res.status===202)
        {
            dispatch({type :productConstants.DELETE_SUCCESS});
            dispatch(getproducts());
        }
        else{
            const{ error}=res.data;
            dispatch({type:productConstants.GET_ALL_PRODUCTS_FAILURE,payload:{
                error,
            }});
            
           
        }

        }catch(error){
            console.log(error);
        }

         
    };
};