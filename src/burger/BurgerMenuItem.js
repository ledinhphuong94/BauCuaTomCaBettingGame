import React, { Component } from 'react'
import { connect } from "react-redux"

class BurgerMenuItem extends Component {

    render() {
        const { choosenItemPlus, choosenItemMinus, item } = this.props;

        console.log(item);
        return (
            <tr>
                <th>{item.name}</th>
                <td>
                    <button className="btn btn-success mr-2" onClick={() => { choosenItemPlus(item) }} >+</button>
                    <button className="btn btn-danger" onClick={() => { choosenItemMinus(item) }} >-</button>
                </td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        choosenItemPlus: (item) => {
            const action = {
                type: "CHOOSEN_ITEM_PLUS",
                value: item
            };
            dispatch(action)
        },
        choosenItemMinus: (item) => {
            const action = {
                type: 'CHOOSEN_ITEM_MINUS',
                value: item
            };
            dispatch(action)
        }

    }
}

export default connect(null, mapDispatchToProps)(BurgerMenuItem)