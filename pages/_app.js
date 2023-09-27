import { CartContextProvider } from "@/components/CartContext";
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
