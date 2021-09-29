import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/uiSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  //  const uiState = useSelector((state) => state.uiReducer);
  const cartState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  // console.log(`cartState`, cartState.totalQty);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartState.totalQty}</span>
    </button>
  );
};

export default CartButton;
