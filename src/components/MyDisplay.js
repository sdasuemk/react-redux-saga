import React from 'react'
import {useSelector} from 'react-redux' // to get redux data in react component

const MyDisplay = () => {
    const cart = useSelector((state) =>state.cartReducer.list) //reduxState.reducerName.<items>
    console.log(cart)
    const sagaExample = useSelector((state) =>state.sagaExampleReducer.sagaItem)
    console.log("sagaExampleAtDisplay",sagaExample)
  return (
    <div>
        {
            cart.map((item) =>  {
                return <p key={item}>{item.item} from {item.brand}</p>
            })
        }
        <p>Number of item {cart.length}</p>
       
        <p>API DATA</p> {
           
          sagaExample.map((item) =>(
          <div>
             
            <p>{item.name}</p>
          </div>
          ))

        }
    </div>
  )
}

export default MyDisplay