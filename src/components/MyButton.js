import React from 'react'
import {addToCart, removeToCart, getSagaExample} from '../actions/index'
import {useDispatch} from 'react-redux'
import MyDisplay from './MyDisplay'

const MyButton = () => {
    const dispatch = useDispatch()
    const exampleProduct = {
        item: 'iPhone',
        brand: 'Apple',
        catagory: 'mobile',
        color: 'red'
    }
    const handleAddClick = () => {
        dispatch(addToCart(exampleProduct))
    };
    const handleRemoveClick = () => {
      dispatch(removeToCart(`${exampleProduct.item} is removed!`))
  };
  const handleSagaExampleClick = () => {
    dispatch(getSagaExample())
  };
  return (
    <div>
        <button onClick={handleAddClick}>add to cart</button>
        <button onClick={handleRemoveClick}>remove to cart</button>
        <button onClick={handleSagaExampleClick}>saga-example</button>
        <MyDisplay />
    </div>
  )
}

export default MyButton