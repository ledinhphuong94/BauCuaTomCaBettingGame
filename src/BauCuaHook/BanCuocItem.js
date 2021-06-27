import React, { useState } from 'react'
import renderImage from '../ReduxHook/action/renderImage'
import { useDispatch } from 'react-redux'

export default function BanCuocItem(props) {
    const { item } = props;

    const dispatch = useDispatch();
    const handleAdd = (value) => {
        dispatch({
            type: "ADD",
            value: value
        })
    }

    const handleRemove = (value) => {
        dispatch({
            type:"REMOVE",
            value: value
        })
    }

    return (
        <div className="col-4 text-center">
            <img src={renderImage(item.id)} alt="" />
            <div className="tienThuong my-2">
                <span>Bet money: </span>
                <button className="btn btn-success" onClick={() => handleAdd(item)}>+</button>
                <span> {item.tienCuoc} </span>
                <button className="btn btn-danger" onClick={()=> handleRemove(item)}>-</button>
            </div>
        </div>
    )
}
