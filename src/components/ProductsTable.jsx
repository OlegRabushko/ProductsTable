import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductAC } from "../redux/reducer";
import style from "./App.module.css";
import Product from "./Product";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  const productNameInput = React.createRef();
  const amountInput = React.createRef();
  const priceInput = React.createRef();

  const addProduct = (e) => {
    e.preventDefault();
    const product = productNameInput.current.value;
    const amount = amountInput.current.value;
    const price = priceInput.current.value;
    dispatch(
      addProductAC({
        id: state.length + 1,
        product: product?product:'-product not listed-',
        amount: amount ?(amount<1?1:amount) : 1,
        price: price?(price<0?0:price): 0,
      })
    );
  };

  return (
    <div className={style.container}>
      <div  className={style.productTable}>
        <div className={style.descriptionInputs}>
          <div className={style.textProduct}>Product</div>
          <div className={style.textAmount}>Amount</div>
          <div className={style.textPrice}>Price($)</div>
        </div>
        <form onSubmit={addProduct}>
          <input className={style.productInput} type="text" placeholder='Type your product' ref={productNameInput} maxLength='15'></input>
          <input className={style.amountInput} type="number" ref={amountInput} max='999' min='1'></input>
          <input className={style.priceInput} type="number" ref={priceInput}min='0' max='99999'></input>
          <button className={style.addBtn}>+</button>
        </form>
        <div className={style.table}>
          {state.map((el) => {
            return <Product el={el} key={el.id} />;
          })}
        </div>
        <div  className={style.score}>
          Total Score: {state.reduce((acc, el) => {
            return acc + el.price * el.amount;
          }, 0)}$
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
