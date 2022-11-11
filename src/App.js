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
      <footer id="footer">
        <p>Project made by <a href="https://www.linkedin.com/in/vivekkumar097/" target="_blank" rel="noopener noreferrer">Vivek Kumar</a></p>
      </footer>
    </CartProvider>
  );
}

export default App;
