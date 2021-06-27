import React, { Component } from 'react'
import {connect} from 'react-redux'
import {XOC, TANG_CUOC, GIAM_CUOC, CHOI_LAI} from '../redux/constant/BauCua'
import {bauCuaAction} from '../redux/action/BauCua'

class Xoc extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            xoc:[1,2,3],
            animation: false
        }
    }   

    handleImg = (xoc) => {
        switch (xoc) {
            case 1:
                return "./img/cua.png"
            case 2: 
                return "./img/nai.png"
            case 3:
                return "./img/ga.png"
            case 4:
                return "./img/tom.png"
            case 5:
                return "./img/ca.png"
            case 6: 
                return "./img/bau.png"
        }
    }

    handleRamdom = () => {
        this.setState({
            animation: true
        })
        
        setTimeout(() => {
            let xoc1 =  Math.round(Math.random()*5)+1;
            let xoc2 =  Math.round(Math.random()*5)+1;
            let xoc3 =  Math.round(Math.random()*5)+1;
            
            this.setState({
                xoc: [xoc1, xoc2, xoc3],
                animation: false
            })
    
            this.props.xoc([xoc1, xoc2, xoc3])
            
        }, 3000);
       
    }

    render() {
        return (
            <div className="xoc d-flex flex-column align-items-center justify-items-center">
                <img className={`d-block ${this.state.animation?"shaking":""}`} src={this.handleImg(this.state.xoc[0])} alt="" />
                <img className={`d-block my-3 ${this.state.animation?"shaking":""}`} src={this.handleImg(this.state.xoc[1])} alt="" />
                <img className={`d-block ${this.state.animation?"shaking":""}`} src={this.handleImg(this.state.xoc[2])} alt="" />
                <button className="text-white btn btn-success m-3" onClick={() => {this.handleRamdom()}} disabled={this.props.statusThua}>Xốc</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        banBauCua: state.bauCuaReducer.banBauCua,
        statusThua: state.bauCuaReducer.statusThua
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        xoc: (item) => dispatch(bauCuaAction(item, XOC))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Xoc)