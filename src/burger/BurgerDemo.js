import React, { Component } from 'react'
import { connect } from "react-redux"

class BurgerDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            salad: 1,
            beefQty: 1,
            cheeseQty: 1
        }
    }

    componentDidUpdate(preProps, preState) {
       
        if(this.state.salad !== this.props.burgerDetail[0].quantity){
            this.setState({
                salad: this.props.burgerDetail[0].quantity
            })
        }

        if(this.state.beefQty !== this.props.burgerDetail[2].quantity){
            this.setState({
                beefQty: this.props.burgerDetail[2].quantity
            })
        }

        if(this.state.cheeseQty !== this.props.burgerDetail[1].quantity){
            this.setState({
                cheeseQty: this.props.burgerDetail[1].quantity
            })
        }
          
    }
    render() {

        let salad = [];
        let cheese = [];
        let beef = [];
        for (let i = 0; i < this.state.salad; i++) {
            salad.push(<div key={i} className="salad"></div>)
        }

        for (let i = 0; i < this.state.cheeseQty; i++) {
            cheese.push(<div key={i} className="cheese"></div>)
        }

        for (let i = 0; i < this.state.beefQty; i++) {
            beef.push(<div key={i} className="beef"></div>)
        }

        return (

            <div>
                <div id="myList">
                    <div className="breadTop"></div>
                    {salad}
                    {cheese}
                    {beef}                  
                   <div className="breadBottom"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burgerDetail: state.burderReducer.burgerDetail
    }
}

export default connect(mapStateToProps)(BurgerDemo)