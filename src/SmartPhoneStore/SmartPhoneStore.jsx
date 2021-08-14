import React, { Component } from 'react';

import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ProductCheckout from './ProductCheckout';  


class SmartPhoneStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "id": 1,
                    "name": "Samsung Galaxy A10",
                    "price": "40906000",
                    "img": "Assets-Image/samsung-galaxy.jpg",
                    "info": {
                        "screen": "AMOLED Full HD 9.0",
                        "os": "Android 9.0",
                        "frontCamera": "20MP",
                        "backCamera": "Chính 48MB, phụ 30MP"
                    },
                    "ram": "4 GB",
                    "rom": "64 GB"
                },
                {
                    "id": 2,
                    "name": "IPhone12",
                    "price": "200306000",
                    "img": "Assets-Image/iphone-12.jpg",
                    "info": {
                        "screen": "Full HD 12.0",
                        "os": "IOS 14",
                        "frontCamera": "20MP",
                        "backCamera": "Chính 100MB, phụ 30MP"
                    },
                    "ram": "16 GB",
                    "rom": "32 GB"
                },
                {
                    "id": 3,
                    "name": "Xiaomi Note 10",
                    "price": "10005000",
                    "img": "Assets-Image/xiaomi-redmi-note-10-5g.jpg",
                    "info": {
                        "screen": "OLED 10.0",
                        "os": "Android 8.0",
                        "frontCamera": "69MP",
                        "backCamera": "Chính 96MB, phụ 30MP"
                    },
                    "ram": "10 GB",
                    "rom": "64 GB"
                }
            ],

            // Thay doi giao dien this.state (default giao diện)
            selectedProduct:{
                "id": 1,
                "name": "Samsung Galaxy A10",
                "price": "40906000",
                "img": "Assets-Image/samsung-galaxy.jpg",
                "info": {
                    "screen": "AMOLED Full HD 9.0",
                    "os": "Android 9.0",
                    "frontCamera": "20MP",
                    "backCamera": "Chính 48MB, phụ 30MP"
                },
                "ram": "4 GB",
                "rom": "64 GB"
            },

            // Save Products in Cart
            cart: [],
        };
    }


    // hàm này sẽ là props của ProductList
    onSelectedProduct = (id) => {
        // All Data Objects above into "const products"
        const products = this.state.products;
        const index = products.findIndex((product) => product.id === id); // idx = 0, 1, 2

        if (index !== -1) {
            this.setState({
                selectedProduct: products[index],
            });
        }

    };


    // Thêm Vào Giỏ Hàng
    onAddtoCart = (product) => {
        /**  Compare if product's id has already been in the cart or not
         Dùng hàm findIndex, nếu ko tìm được trong cart -> return -1, tìm thấy thì return vị trí product trong cart
         check item.id in cart[] */
        const indexItemInCart = this.state.cart.findIndex((item) => item.id === product.id);

        /** If product not in cart[] yet
         * update amount=1 => push vào cart => update lại state
        */
        if (indexItemInCart === -1) {
            // product chưa có amount, và lấy từ mảng data products. product là object
            // thêm phần tử amount cho product
            product.amount = 1;
            this.setState({
                // spead operator và this.state.cart là return mảng với value cũ, và thêm product (value mới)
                cart: [...this.state.cart, product]
            });


            // else là trường hợp product đã exist in cart
        } else {
            const currentCart = this.state.cart;
            // update amount của product tại index đó tăng 1 đơn vị 
            currentCart[indexItemInCart].amount += 1;
            this.setState({
                cart: currentCart,
            });
        }
    }

    
    // Add amount of product
    // onPlusAmountCartItem = (id) => {
    //     const currentCart = this.state.cart;
    //     const idxItemInCart = currentCart.findIndex((item) => item.id === id);

    //     // Update amount number
    //     currentCart[idxItemInCart].amount +=1;
    //     this.setState({
    //         cart: currentCart,
    //     })

    // }

    // Minus amount of product
    // onMinusAmountCartItem = (id) => {
    //     const currentCart = this.state.cart;
    //     const idxItemInCart = currentCart.findIndex((item) => item.id === id);
    //     currentCart[idxItemInCart].amount -=1;
    //     this.setState({
    //         cart: currentCart,
    //     })
    // }

    // Add and Minus Amount of Product
    onHandleAmountCartItemChange = (id, value) => {
        const currentCart = this.state.cart;
        const idxItemInCart = currentCart.findIndex((item) => item.id === id);
        currentCart[idxItemInCart].amount += value;
        this.setState({
            cart: currentCart,
        })

    }

    // on Delete the Product
    onDeleteProduct = (id) => {
        const currentCart = this.state.cart;
        const idxItemInCart = currentCart.findIndex((item) => item.id === id);
        currentCart.splice(idxItemInCart, 1);
        this.setState({
            cart: currentCart,
        })
    }


    render() {
        const {products} = this.state;
        const {selectedProduct, cart} = this.state;

        return (

            // CheckOut Cart Button in Parents Component 
            <div className="container pt-5">
                <h1 className="text-primary text-center">Thế Giới Di Động.com</h1>
                <div className="d-flex justify-content-end">
                    <button type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">

                        
                            Giỏ Hàng ({cart.length})
                    </button>
                </div>
                

                {/** phoneProducts được truyền data bởi products (array) và bay xuống Component con 
                ProductList có 2 props để truyền: phoneProducts và onSelectedProduct */}

                <ProductList 
                    // biến có tên là phoneProducts mang giá trị là 1 mảng các sản phẩm 
                    phoneProducts={products}
                    onSelectedProduct = {this.onSelectedProduct}

                    // Hàm có tên là onAddtoCart mang giá trị của function 
                    onAddtoCart = {this.onAddtoCart}
                />


                <ProductDetail productDetail={selectedProduct} />

                <ProductCheckout cart={this.state.cart} 
                                // onPlusAmountCartItem={this.onPlusAmountCartItem}
                                // onMinusAmountCartItem={this.onMinusAmountCartItem}
                                onHandleAmountCartItemChange={this.onHandleAmountCartItemChange}
                                onDeleteProduct={this.onDeleteProduct} />
                
            </div>
        );
    }
}

export default SmartPhoneStore;



/** GUIDE PROJECT:
 * SmartphoneStore (parents Component) --> where to store Data and props to child Components
 *  - ProductList 
 *      + ProductItem
 *      + ProductItem
 *      + ProductItem
 *  - ProductDetail
 * 
 */

/** BOOTSTRAP
 * pt-5: padding-top 1 --> 5 (1: nhỏ nhất)
 * mb-3: margin bottom 
 */ 
