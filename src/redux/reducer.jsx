const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const defaultState =[
    {id:1, product: 'Apple', amount: 2, price: 50},
    {id:2, product: 'Banana', amount: 3, price: 60},
    {id:3, product: 'Orange', amount: 1, price: 30},
]

export const mainReducer  =(state = defaultState, action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            let newProduct = [...state]
            newProduct.push(action.payload)
            return newProduct;
        case DELETE_PRODUCT:
            return [...state].filter(el=>el.id!==action.payload);
        case UPDATE_PRODUCT:
            let updateProduct = [...state]
            let index = -1;
            for(let i =0; i<updateProduct.length;i++){
                index++;
                if(updateProduct[i].id === action.payload.id){
                    break
                }
            }
            if(index !== -1){
                updateProduct[index] = action.payload;
                return updateProduct;
            }
        break
        default: return state; 
    }
}

export const addProductAC = (product)=>({
    type:ADD_PRODUCT,
    payload: product
})
export const deleteProductAC = (product)=>({
    type:DELETE_PRODUCT,
    payload: product
})
export const updateProductAC = (product)=>({
    type:UPDATE_PRODUCT,
    payload: product
})