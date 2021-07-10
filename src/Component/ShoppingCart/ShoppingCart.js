import React from "react";
import ShoppingItem from "./ShoppingItem";
import ShoppingItemForm from "./FrmShoppingItem";
import "./ShoppingCart.css";
import "./ShoppingForm.css";

const ShoppingCart = (mainApp) => {
  const shoppingItems = [
    {
      id: 1,
      name: "Milk Powder",
      price: 256,
      avalQty: 45,
      reqQty: 123,
    },
    {
      id: 2,
      name: "Biscuts",
      price: 500,
      avalQty: 12,
      reqQty: 1234,
    },
  ];

  const OnSubmitHandler = (submitData) => {
    mainApp.onSaveShoppingItem(submitData);
    console.log(submitData);
  }

  return (
    <div>
      <h1>Shoping Cart</h1>
      <ShoppingItem
        id={shoppingItems[0].id}
        name={shoppingItems[0].name}
        price={shoppingItems[0].price}
        avalQty={shoppingItems[0].avalQty}
        reqQty={shoppingItems[0].reqQty}
      ></ShoppingItem>
      <ShoppingItem
        id={shoppingItems[1].id}
        name={shoppingItems[1].name}
        price={shoppingItems[1].price}
        avalQty={shoppingItems[1].avalQty}
        reqQty={shoppingItems[1].reqQty}
      ></ShoppingItem>

      <div className="Shopping_cart_Add">
        <ShoppingItemForm onSubmit={OnSubmitHandler} />
      </div>
    </div>
  );
};
export default ShoppingCart;
