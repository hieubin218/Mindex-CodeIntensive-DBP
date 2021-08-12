import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {name, price, img, id} = this.props.product;
        const {onSelectedProduct, onCart} = this.props;
        return (
            <div className="card p-2" style={{width: '18rem'}}>
                <img src={img} 
                    className="card-img-top" 
                    alt="..." 
                /> 
                <div className="card-body">
                    <h5 className="card-title mb-3">{name}</h5>
                    <p>Price: {price} VND </p>
                    <a  onClick={ () => onSelectedProduct(id)} className="btn btn-success">
                        Xem Chi Tiet
                    </a>

                    <a onClick={ () => onCart(id)} className="btn btn-danger" style={{marginLeft: "10px"}}>
                       Thêm Cart
                    </a>

                </div>
            </div>      
        );
    }
}

export default ProductItem;