import logo from "./logo.svg";
import "./App.css";
import Login from "./Component/Login/Login";
import ShoppingCart from "./Component/ShoppingCart/ShoppingCart";

function App() {

  const saveShoppingItemHandler = (shoppingItem) =>{
    console.log(shoppingItem);
  }
  // Added a comment
  return (
    <div className="App">
      <ShoppingCart onSaveShoppingItem={saveShoppingItemHandler} />
    </div>
  );
}

export default App;
