import React, {useState} from 'react';
import Card from './Card';
import './ShoppingCart.css';

const ShoppingItem = (props) =>{

    const[isAdded,setStatus] = useState('');

    const AddToCart = () =>{
        setStatus('Added');
    }

    return(
        <Card className='shopping-item'>
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>{props.avalQty}</div>
            <div>{isAdded}</div>
            <input type='TEXT' value={props.reqQty}></input>
            <button onClick={AddToCart}>Add to Cart</button>
        </Card>
    )
}
export default ShoppingItem;