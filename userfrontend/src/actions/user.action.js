import { userConstants } from "./constants";
import axios from "../helpers/axios";
//fetch address
export const getAddress = () => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/user/getaddress`);
      dispatch({ type: userConstants.GET_ADDRESS_REQUEST });
     
      if (res.status === 200) {
        const {
          userAddress: {
             address
             }
        } = res.data;
        dispatch({
          type: userConstants.GET_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
//add user address
export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/user/address/create`, { payload });
      dispatch({ type: userConstants.ADD_ADDRESS_REQUEST });
      console.log('dewww checkout');
      if (res.status === 201) {
        console.log(res);
        // const {
        //   userAddress: { address },
        // } = res.data;
        // dispatch({
        //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
        //   payload: { address },
        // });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_ADDRESS_REQUEST,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
