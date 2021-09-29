import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [state, setstate] = useState();
  const cartState = useSelector((state) => state.cartReducer);
  //console.log(`cartState`, cartState);

  useEffect(async () => {
    const res = await fetch(
      "https://react-http-55714-default-rtdb.firebaseio.com/cart.json"
    );
    const data = await res.json();
    setstate(data);
    console.log(`data`, data);
  }, [cartState]);
  console.log(`state`, state);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.items.map((item) => {
          return (
            <>
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  quantity: item.qty,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            </>
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
