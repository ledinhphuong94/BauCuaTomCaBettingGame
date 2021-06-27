const initialState = {
    burgerDetail: [
        {
            name: 'salad',
            quantity:1,
            unitPrice:5,
        },
        {
            name: 'cheese',
            quantity:1,
            unitPrice:10,
        },
        {
            name: 'beef',
            quantity:1,
            unitPrice:25,
        }
    ],
    chosenItem:{},
    total: 0,
}

const burderReducer = (state = initialState, action) => {
    let total = state.burgerDetail[0].quantity * state.burgerDetail[0].unitPrice + state.burgerDetail[1].quantity * state.burgerDetail[1].unitPrice + state.burgerDetail[2].quantity * state.burgerDetail[2].unitPrice;

    switch (action.type) {
        case "CHOOSEN_ITEM_PLUS":{        
            
            const burgerDetail = state.burgerDetail.map(item => {
                if(item.name === action.value.name){
                    return {...item,quantity:action.value.quantity+1}
                }
                return item
            })
            
            // let newBurgerDetail = [...state.burgerDetail]          
            // let index = newBurgerDetail.findIndex((item)=> item.name === action.value.name
            // );

            // let newQty = newBurgerDetail[index].quantity + 1;
            // newBurgerDetail[index].quantity = newQty

            return {...state,chosenItem:action.value, total: total + action.value.unitPrice, burgerDetail};
        }
        
        case "CHOOSEN_ITEM_MINUS":{

            const burgerDetail = state.burgerDetail.map(item => {
                if(item.name === action.value.name){
                    return {...item,quantity:action.value.quantity-1}
                }
                return item
            })
            // let newBurgerDetail = [...state.burgerDetail]          
            // let index = newBurgerDetail.findIndex((item)=> item.name === action.value.name
            // );         

            if(action.value.quantity > 1){
                action.value.quantity -= 1;
                return {...state, burgerDetail,chosenItem:action.value, total: total - action.value.unitPrice };
            }            
           
        }
        
        case "RESET":{
            let newBurgerDetail = [...state.burgerDetail]       
            newBurgerDetail[0].quantity = 1;
            newBurgerDetail[1].quantity = 1;
            newBurgerDetail[2].quantity = 1;
            let newTotal = newBurgerDetail[0].unitPrice + newBurgerDetail[1].unitPrice + newBurgerDetail[2].unitPrice
           
            return {...state,total: newTotal, burgerDetail:[...newBurgerDetail]}
        }

        default:
            return {...state, total};
    }
}

export default burderReducer;