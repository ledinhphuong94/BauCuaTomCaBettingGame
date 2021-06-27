import React, { Component } from 'react'
import BauCuaItem from './BauCuaItem'
import {connect} from "react-redux"

class BanBauCua extends Component {
   
    render() {
        const {banBauCua} = this.props;     
        return (           
            <div className="row">
                {banBauCua.map(item => {
                    return (
                        <BauCuaItem key={item.id} item={item}/>
                    )
                })}
            </div>          
        )
    }
}

const mapStateToProps = (state) => {
    return{
        banBauCua: state.bauCuaReducer.banBauCua,
    }
    
}

export default connect(mapStateToProps)(BanBauCua)