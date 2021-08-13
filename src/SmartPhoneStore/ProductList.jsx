import React, { Component } from 'react';
import ProductItem from './ProductItem';



export default class ProductList extends Component {
    render() {
        // Nhận props data của Component Cha truyền xuống là SmartPhoneStore
        const {phoneProducts, onSelectedProduct, onAddtoCart} = this.props;
        
        return (
            <div className="row">
                <h3 className="text-center text-info" style={{margin: "30px"}}> Sản Phẩm Hiện Nay</h3>
                
                {/** Map all products of Objects Array */}
                {
                    phoneProducts.map((phoneInfor, index) => {
                        return (
                            <div className="col-4 col-">
                                <ProductItem 
                                    eachProduct={phoneInfor} 
                                    onSelectedProduct={onSelectedProduct}
                                    onAddtoCart = {onAddtoCart}
                                    key={index} />

                            </div>
                        );
                    })
                };       
            </div>
        )   
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
