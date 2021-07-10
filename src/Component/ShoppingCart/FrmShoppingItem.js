import React, { useState } from "react";
import "./ShoppingForm.css";

const ShoppingItemForm = (props) => {
  const [idVal, changeId] = useState("");
  const [nameVal, changeName] = useState("");
  const [priceVal, changePrice] = useState("");
  const [qtyVal, changeQty] = useState("");

  const IdChangedHandler = (event) => {
    changeId(event.target.value);
  };
  const NameChangedHandler = (event) => {
    changeName(event.target.value);
  };
  const PriceChangedHandler = (event) => {
    changePrice(event.target.value);
  };
  const QtyChangedHandler = (event) => {
    changeQty(event.target.value);
  };

  const addShoppingItem = (event) => {
    event.preventDefault();
    const shoppingItemData = {
        id : idVal,
        name : nameVal,
        price : priceVal,
        qty : qtyVal
    }
    props.onSubmit(shoppingItemData);
    //console.log(shoppingItemData);
    changeId('');
    changeName('');
    changeQty('');
    changePrice('');
  };

  /*
  const [userInput, setUserInput] = useState({
    enteredId: "",
    enteredName: "",
    enteredPrice: "",
    enteredAvalQty: "",
  });
  */
  /*
    const IdChangedHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredId:event.target.value,
        });
    };
    */
  /*
  const IdChangedHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredId: event.target.value };
    });
  };
  */

  return (
    <form onSubmit={addShoppingItem}>
      <div className="form_shopping_Items">
        <div className="form_shopping_Item">
          <label>ID</label>
          <input type="Text" value={idVal} onChange={IdChangedHandler}></input>
        </div>
        <div className="form_shopping_Item">
          <label>Name</label>
          <input type="Text" value={nameVal} onChange={NameChangedHandler}></input>
        </div>
        <div className="form_shopping_Item">
          <label>Available Qty</label>
          <input type="Text" value={qtyVal} onChange={QtyChangedHandler}></input>
        </div>
        <div className="form_shopping_Item">
          <label>Price</label>
          <input type="Text" value={priceVal} onChange={PriceChangedHandler}></input>
        </div>
      </div>
      <div className="form_btn_submit_action">
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default ShoppingItemForm;
