import React, { Component } from 'react'
import BurgerDemo from './BurgerDemo'
import BurgerMenu from './BurgerMenu'

export default class Burger extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="my-5">Chọn Menu burger</h3>
                <div className="row">
                    <div className="col-8">
                        <h4>Hình Hamburger</h4>
                        <BurgerDemo />
                    </div>
                    <div className="col-4">
                        <BurgerMenu />
                    </div>
                </div>

                <div className="modal fade" id="thongBao">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Chon mon thanh cong</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                Chon mon thanh cong
      </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
