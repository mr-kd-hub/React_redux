import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./redux/uiSlice";

//import { uiActions } from "./redux/uiSlice";
let isInitial = true;
function App() {
  const state = useSelector((state) => state.uiReducer);
  const cart = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  // console.log(`state`, cart);

  useEffect(async () => {
    dispatch(
      uiActions.showNotification({
        status: "Pending...",
        title: "Sending...",
        message: "Sending Cart Data...",
      })
    );
    if (isInitial) {
      isInitial = false;
      return;
    }
    const res = await fetch(
      "https://react-http-55714-default-rtdb.firebaseio.com/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
    if (!res.ok) {
      throw new Error("Sending Cart Data Failed...");
    }
    const data = await res.json();

    dispatch(
      uiActions.showNotification({
        status: "Sent",
        title: "Sent Success",
        message: "Data sent..",
      })
    );
  }, [cart]);
  return (
    <Layout>
      {state.notification && (
        <Notification
          status={state.notification.status}
          title={state.notification.title}
          message={state.notification.message}
        />
      )}
      {state.IsCartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
