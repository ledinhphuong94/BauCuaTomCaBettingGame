import React, { Component } from 'react'
import {connect} from 'react-redux'
import {XOC, TANG_CUOC, GIAM_CUOC, CHOI_LAI} from '../redux/constant/BauCua'
import {bauCuaAction} from '../redux/action/BauCua'

class BauCuaItem extends Component {
    render() {
        const {item} = this.props
        return (
            <div className="col-4 my-3">
                <img src={item.url} alt="" />
                <div className="cuoc m-3 bg-warning p-2 rounded">
                    <span className="text-dark fs-1">Cược: </span>
                    <button className="btn btn-success" onClick={()=> this.props.tangCuoc(item)}>+</button>
                    <span className="text-white mx-3"> {item.tienCuoc} </span>
                    <button className="btn btn-success" onClick={()=> this.props.giamCuoc(item)}>-</button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        tangCuoc: (item) => dispatch(bauCuaAction(item,TANG_CUOC)),

        giamCuoc: (item) => dispatch(bauCuaAction(item,GIAM_CUOC))
    }
}

export default connect (null,mapDispatchToProps)(BauCuaItem)