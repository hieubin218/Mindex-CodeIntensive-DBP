import React, { Component } from 'react';


export default class ProductCheckout extends Component {
    render() {
        // receive method props from parents component
        const {cart, onHandleAmountCartItemChange, onDeleteProduct} = this.props;
        let totalPrice = 0;
        for (let cartItem of cart) {
            totalPrice += (cartItem.amount * cartItem.price);
        }
        

        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Giỏ Hàng Khách Hàng</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
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
                                {cart.length > 0 ? (cart.map((cartItem) => {
                                        const {id, name, img, price, amount} = cartItem;
                                        return (
                                            <tr key={id}>
                                                <td>{id}</td>
                                                <td>
                                                {/*objectFit cho hình ko sai kích cỡ * */}
                                                    <img src={img} style={{width: "32px", height: "auto", objectFit:"cover"}} />
                                                </td>
                                                <td>{name}</td>
                                                <td> 
                                                    <button className="btn btn-primary" 
                                                            onClick={() =>onHandleAmountCartItemChange(id, -1)}

                                                            // Stop button when amount is 1
                                                            disabled={amount <= 1 ? true: false}>
                                                        -
                                                    </button>
                                                    {/** make space between */}
                                                    <span className="mx-2">{amount}</span>
                                                    <button className="btn btn-primary" onClick={() => onHandleAmountCartItemChange(id, +1)}>+</button>
                                                </td>

                                                <td>{price}</td>
                                                <td>{price*amount}</td>
                                                <td>
                                                    <a href="#" className="btn btn-danger" onClick={() => onDeleteProduct(id)}>Delete</a>
                                                </td>    
                                            </tr>
                                            
                                            
                                        );
                                    })
                                    
                                    

                                ) : (
                                    <p>Cart Empty, Please select your Item </p>
                                )}

                                    {/** Total Price */ }
                                {cart.length >0 ?
                                    <tr>
                                    <td><b>Total Price</b></td>
                                    <td>{totalPrice} VND</td>
                                    </tr>
                                    : 0
                                    }
                            </tbody>
                        </table>
                    </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Thanh Toán</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}