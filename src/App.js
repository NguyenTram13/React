import React, { createContext, useContext, useState } from "react";
import PhotoList from "./components/gallery/PhotoList";
import cartList from "./components/gallery/CartList";

import Headermain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { CountProvider, useCount } from "./contexts/CountContext";
import { GalleryProvider } from "./contexts/gallery-context";
import CartList from "./components/gallery/CartList";

function CountDisplay() {
  const [count] = useCount();
  return <div>The count is : {count}</div>;
}
function Countter() {
  const [, setCount] = useCount();

  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
    >
      Increment count
    </button>
  );
}
const App = () => {
  return (
    <div className="p-5 gap-x-5">
      {/* <CountProvider>
        <CountDisplay></CountDisplay>
        <Countter></Countter>
      </CountProvider> */}
      <AuthProvider>
        <GalleryProvider>
          <Headermain></Headermain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
