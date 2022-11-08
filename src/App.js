import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Cubes from "./components/Cubes/Cubes";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Cubes></Cubes>
      </main>
    </CartProvider>
  );
}

export default App;
