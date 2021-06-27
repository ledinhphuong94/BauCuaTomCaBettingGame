// Bài tập bầu cua tôm cá - Lê Định Phương

import React, { Component } from 'react'
import BanBauCua from './BanBauCua'
import Xoc from './Xoc'
import { connect } from 'react-redux'
import {XOC, TANG_CUOC, GIAM_CUOC, CHOI_LAI} from '../redux/constant/BauCua'
import {bauCuaAction} from '../redux/action/BauCua'

class BauCua extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="bauCua text-center m-4">BẦU CUA TÔM CÁ - CYBERSOFT</h1>   

                {this.props.statusThua ? 
                <div className="alert alert-danger">
                    <h2 className="">Bạn đã thua !</h2>
                    <button className="mb-2 btn btn-success fs-5" onClick={()=> this.props.choiLai(500)}>Chơi lại</button>
                </div>     
                : ""}   
                <span className="tienThuong">
                    <span>Tiền thưởng: </span>
                    <span className="text-success">{this.props.tienThuong}</span>
                </span>

                <div className="row my-5">
                    <div className="col-8">
                        <BanBauCua />
                    </div>
                    <div className="col-4">
                        <Xoc />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        tienThuong: state.bauCuaReducer.tienThuong,
        statusThua: state.bauCuaReducer.statusThua
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        choiLai: (value) => dispatch(bauCuaAction(value,CHOI_LAI))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BauCua)