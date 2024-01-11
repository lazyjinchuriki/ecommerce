import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: 'Inclusive Sans', sans-serif;
    background-color: #f5f5f5;
}
button {
    font-family: 'Inclusive Sans', sans-serif;
}
input {
    font-family: 'Inclusive Sans', sans-serif;
}


/* scrollbar customisation */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: rgba(46, 46, 46, 0.1);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: #202020;
    border-radius: 10px;
}
hr{
    display: block;
    border:0;
    border-top:1px solid #ccc;
  }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
