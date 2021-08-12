import React, { Component } from 'react';
import ProductItem from './ProductItem';



export default class ProductList extends Component {
    render() {
        // Nhận props data của Component Cha truyền xuống là SmartPhoneStore
        const {phoneProducts, onSelectedProduct, onCart} = this.props;
        return (
            <div className="row">
                <h3 className="text-center" style={{margin: "30px"}}>Product List</h3>
                {
                    phoneProducts.map((productItem, index) => {
                        return (
                            <div className="col-4 col-md-4">
                                {/*Truyền props onSelectedProduct và product xuống ProductItem */}
                                <ProductItem 
                                    onSelectedProduct={onSelectedProduct}
                                    onCart={onCart}
                                    product={productItem} 
                                    key={index} />
                            </div>
                        ); 
                    })
                };
            </div>
        );
    }
}


// grid system on Boostrap
// Nguyên màn hình có 12 cột, col-4 = mỗi item có 4 cột 
// --> muốn set up items thành 1 hàng thì bọc child div vào div cha với className="row"
/**
 * <div class="row">
 *      <div class="col-4">
 *          ......
 *      </div>
 */
