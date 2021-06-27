import React, { Component } from 'react'
import { connect } from 'react-redux'
import BurgerMenuItem from './BurgerMenuItem'

class BurgerMenu extends Component {
    render() {
        const { burgerDetail } = this.props

        return (
            <div>
                <h5>Chọn thức ăn</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Thức Ăn</th>
                            <th scope="col"></th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {burgerDetail.map((item) => {
                            console.log(item)
                            return (
                                <BurgerMenuItem key={item.name} item={item} />
                            )
                        })}

                    </tbody>
                </table>
                <p className="ml-5">Tổng Tiền: <b>{this.props.total}</b> USD</p>
                <button className="btn btn-info ml-5" data-toggle="modal" data-target="#thongBao" onClick={() => this.props.reset({})}>Thanh Toán</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        burgerDetail: state.burderReducer.burgerDetail,
        total: state.burderReducer.total
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: (item) => {
            const action = {
                type: 'RESET',
                value: item
            };
            dispatch(action)
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu)