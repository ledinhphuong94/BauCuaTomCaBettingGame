const initialState = {
    banBauCua:[
        { id:1, tienCuoc: 0},
        { id:2, tienCuoc: 0},
        { id:3, tienCuoc: 0},
        { id:4, tienCuoc: 0},
        { id:5, tienCuoc: 0},
        { id:6, tienCuoc: 0}
    ],
    tongTien:500
}

const bauCuaReducer = (state= initialState, action) => {
    switch (action.type) {
        case "ADD":{
            let banBauCua = state.banBauCua
            let tongTien = state.tongTien

            if(tongTien > 0){ 
                banBauCua = banBauCua.map(item => {
                    if(item.id === action.value.id){
                        return {...item,tienCuoc: item.tienCuoc + 100}  
                    }
                    return item
                }) 

                tongTien -= 100;
            }
            return {...state,banBauCua, tongTien}
            
        }
        
        case "REMOVE":{
            let tongTien = state.tongTien;
            let banBauCua = state.banBauCua;
            console.log(action.value.tienCuoc, action.value.id)

            if(action.value.tienCuoc > 0){
                banBauCua = state.banBauCua.map(item => {
                    if(item.id === action.value.id){
                        return {...item, tienCuoc: item.tienCuoc - 100}
                    }
                    return item
                })
                tongTien += 100             
            }
            return {...state,banBauCua, tongTien}
        }

        case "XOC":{
            console.log(action.value)
            let tongTien = state.tongTien

            const banBauCua = state.banBauCua.map(item => {
                let count = 0;
                let tien = 0
                action.value.forEach(xoc => {
                    if(item.id === xoc){
                        count++;
                        tien = item.tienCuoc + (item.tienCuoc * count);

                        console.log(tongTien,count)
                    } 
                          
                })  

                tongTien += tien;
                return{...item,tienCuoc: 0}
                
            })

            return {...state,banBauCua,tongTien}

        }


        default:
            return state;
    }
}

export default bauCuaReducer;