import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const defaultCart = ls ? JSON.parse(ls.getItem("cart")) : [];
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls) {
      const cart = JSON.parse(ls.getItem("cart"));
      if (cart?.length > 0) {
        setCartProducts(cart);
      }
    }
  }, []);

  const addToCart = (productId) => {
    setCartProducts((prev) => [...prev, productId]);
  };

  const removeFromCart = (productId) => {
    setCartProducts((prev) => {
      const positionIdx = prev.indexOf(productId);
      if (positionIdx !== -1) {
        // prev.splice(positionIdx, 1);
        return prev.filter((value, idx) => idx !== positionIdx);
      }
      return prev;
    });
  };

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
