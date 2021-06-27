import {XOC, TANG_CUOC, GIAM_CUOC, CHOI_LAI} from '../constant/BauCua'

const initialState = {
    banBauCua: [
        {
            id: 1,
            name: "cua",
            tienCuoc: 0,
            url: "./img/cua.png"
        },
        {
            id: 2,
            name: "nai",
            tienCuoc: 0,
            url: "./img/nai.png"
        },
        {
            id: 3,
            name: "ga",
            tienCuoc: 0,
            url: "./img/ga.png"
        },
        {
            id: 4,
            name: "tom",
            tienCuoc: 0,
            url: "./img/tom.png"
        },
        {
            id: 5,
            name: "ca",
            tienCuoc: 0,
            url: "./img/ca.png"
        },
        {
            id: 6,
            name: "bau",
            tienCuoc: 0,
            url: "./img/bau.png"
        }
    ],
    tienThuong: 500,
    statusThua: false
}

const bauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case XOC: {

            let tienThuong = state.tienThuong;
            let tongTien = 0;
            
            state.banBauCua.forEach(item => {
                if(item.tienCuoc > 0){
                    let count= 0;

                    action.value.forEach(kqXoc => {
                        if(item.id === kqXoc){
                            count++;
                        }
                    })

                    if(count >= 1){
                        tongTien += item.tienCuoc + item.tienCuoc * count
                    }
                }
            })

            const banBauCua = state.banBauCua.map(item => {
                return {...item,tienCuoc:0}
            })

            tienThuong += tongTien;

            let statusThua = false;
            if(tienThuong === 0){
                statusThua = true
            }



            return { ...state, tienThuong, banBauCua,statusThua}
        }

        case TANG_CUOC: {
            let tienThuong = state.tienThuong
            const banBauCua = state.banBauCua.map(item => {
                if(item.id === action.value.id && state.tienThuong >= 100){
                    tienThuong -= 100
                    return { ...item, tienCuoc: item.tienCuoc + 100 }
                }
                return item
            })
            return { ...state, tienThuong, banBauCua }
        }

        case GIAM_CUOC: {    

            let tienThuong = state.tienThuong
            const banBauCua = state.banBauCua.map(item => {   
                if(item.id === action.value.id && item.tienCuoc >= 100) {
                    tienThuong += 100
                    return { ...item, tienCuoc: item.tienCuoc - 100}
                }
                return item
            })
            return { ...state, tienThuong, banBauCua }
        }

        case CHOI_LAI:{
            return {...state, tienThuong: action.value, statusThua: false}
        }

        default:
            return state;
    }
}

export default bauCuaReducer