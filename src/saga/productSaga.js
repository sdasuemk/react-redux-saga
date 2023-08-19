import {takeEvery, put} from "redux-saga/effects";
import axios from "axios";

function* getProductsFromAPI(){
    
    const {data} = yield axios.get("http://localhost:3004/product")
    console.log("getProductsFromAPI", data);
    yield put({type:"SET_SAGA_EXAMPLE", data})
}
function* productSaga(){
    yield takeEvery('GET_SAGA_EXAMPLE',getProductsFromAPI)

}
export default productSaga