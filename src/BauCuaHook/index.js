import React, {useEffect} from 'react'
import BanCuoc from './BanCuoc'
import {useSelector, useDispatch} from 'react-redux'

export default function BauCuaHook() {
    const {tongTien} = useSelector((state) => state.bauCuaReducer)
    return (
        <div>
            {console.log("tongtien",tongTien)}
            <h1 className="text-center bauCua">Betting Game Dice "Bầu cua tôm cá"</h1>
            <h2 className="text-center">
                <span className="tienThuong">Total Money: <span className="text-success">{tongTien} USD</span></span>     
            </h2>  
            <BanCuoc/>
        </div>
    )
}
