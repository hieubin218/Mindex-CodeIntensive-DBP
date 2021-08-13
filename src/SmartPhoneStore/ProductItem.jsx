import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {name, img, price, id} = this.props.eachProduct;
        const {onSelectedProduct} = this.props;
        const {onAddtoCart} = this.props;
        
      
        return (
            <div>
                <div className="card p-2" style={{width: "18rem"}}>
                    <img src={img} className="card-img-top" alt="..." style={{padding: "20px"}}/>
                    <div className="card-body">
                        <h5 className="card-title mb-3">{name}</h5>
                        <p className="card-text"><b>Price: </b> {price} VND</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <a onClick={ () => onSelectedProduct(id)} className="btn btn-success">
                                Xem Chi Tiết
                            </a>

                            {/**Nhận data của product được bấm vào (this.props.eachProduct) để add to Cart */}
                            <a onClick={ () => onAddtoCart(this.props.eachProduct)} className="btn btn-danger" style={{marginLeft: "10px"}}>
                                Add to Cart
                            </a>
                        </div>

                    </div>
                </div>


            </div>
            
        );
    }
}

export default ProductItem;