import React, { Component } from 'react';

import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";


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
            }
        }
    }

    // hàm này sẽ là props của ProductList
    onSelectedProduct = (id) => {
        // All Data Objects above into "const products"
        const products = this.state.products;
        const idx = products.findIndex((product) => product.id === id); // idx = 0, 1, 2

        if (idx !== -1) {
            this.setState({
                selectedProduct: products[idx],
            });
        }

    };
    


    render() {
        const {products} = this.state;
        const {selectedProduct} = this.state;
        return (
            <div className="container pt-5">
                <h1 className="text-primary text-center">Thế Giới Di Động</h1>

                {/** phoneProducts được truyền data bởi products (array) và bay xuống Component con 
                ProductList có 2 props để truyền: phoneProducts và onSelectedProduct */}

                <ProductList 
                    phoneProducts={products}
                    onSelectedProduct = {this.onSelectedProduct}  />


                <ProductDetail productDetail={selectedProduct} />
                
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