import React, { useState} from "react";
import { useDispatch} from "react-redux";
import {deleteProductAC, updateProductAC } from "../redux/reducer";
import style from "./App.module.css";

const Product = (props) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [nameProduct, setNameProduct] = useState(props.el.product);
  const [amountNumber, setAmountNumber] = useState(props.el.amount);
  const [priceNumber, setPriceNumber] = useState(props.el.price);
 
  return (
  <>
    <div className={style.fullComponentContainer}>
        <div className={style.productInfoContainer}>
            {edit? 
            <div>
                <input className={style.editProductInput} type="text" value={nameProduct} onChange={(e)=>{setNameProduct(e.target.value)}}></input>
                <input className={style.editAmountInput} type="number" value={amountNumber} onChange={(e)=>{setAmountNumber(e.target.value)}}></input>
                <input className={style.editPriceInput} type="number" min='0' value={priceNumber} onChange={(e)=>{setPriceNumber(e.target.value)}}></input>
            </div>
            :<div className={style.productInfo}>
                        <div className={style.styleId}>№{props.el.id}</div>
                        <div className={style.styleProduct}>{props.el.product}</div>
                        <div className={style.styleAmount}>{props.el.amount}</div>
                        <div className={style.stylePrice}>{props.el.price}$</div>
            </div>}
        </div>
        <div className={style.editDeleteBtns}>
            <button 
                onClick={() => {
                setEdit(!edit);
                dispatch(updateProductAC({
                    ...props.el, product:nameProduct, amount:amountNumber, price:priceNumber
                    }))
                    }}>{!edit?'Edit':'Update'}
            </button>
            <button onClick={() => {
                dispatch(deleteProductAC(props.el.id))
                }}>Delete
            </button>
        </div>
    </div>      
    </>
  )
};
export default Product;