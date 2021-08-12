import React, { Component } from 'react';


export default class ProductCheckout extends Component {
    render() {
        // const {name, price} = this.props.checkoutCart;
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <thead>
                            <tr>
                                <th>Mã Sản Phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành Tiền</th>
                            </tr>
                        </thead>

            
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>Name</td>
                                <td>1</td>
                                <td>price</td>
                                <td>3</td>
                                <a href="#" className="btn btn-danger">Delete</a>
                            </tr>
                        </tbody>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}