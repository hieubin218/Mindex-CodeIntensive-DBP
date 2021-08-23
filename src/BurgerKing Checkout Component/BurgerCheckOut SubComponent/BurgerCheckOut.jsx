import React, { Component } from 'react';
import './BurgerCheckOut.css';


export default class BurgerCheckOut extends Component {

    render() {
        // Receive props from parents Component
        const {menu, onHandleAmountIngredient, onResetOrder, makeOrder, onMakeOrder} = this.props;


        // Method: Calculate Total Price
            // item.price --> $1, 2, 3
            // item.toppingKey --> salad, meat
            // makeOder[salad] = $1.75
        let totalPrice = 0;
        let Tax = 0;
        let priceAfterTax = 0;
        for (let item of menu) {
            totalPrice += item.price * makeOrder[item.toppingKey];
            Tax = Math.round((totalPrice * 0.1) * 100) / 100;
            priceAfterTax = totalPrice + Tax;

        }

        



        return (
            <div className="menu">
               <h4 className="text-center pd-3">Custom your Burger</h4>
               <hr></hr>
                <table className="table text-center">
                    <thead className="fw-bold">
                        <tr>
                            <td>TOPPING</td>
                            <td>OPTION</td>
                            <td>UNIT PRICE</td>
                            <td>PRICE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((toppingType, index) => {
                                const {name, price, toppingKey} = toppingType;
                                return (
                                
                                        <tr key={index}>
                                            <td className="salad-Topping fw-bold">{name}</td>
                                            <td>
                                                <button className="mx-2"
                                                    // toppingKey [salad, cheese, meat, bacon] và value -1 (less button -1 in amount )
                                                    onClick={() => onHandleAmountIngredient(toppingKey, -1)}
                                                    disabled={makeOrder[toppingKey] === 0}>
                                                        LESS
                                                </button>

                                                <span>{makeOrder[toppingKey]}</span>

                                                <button className="mx-2"
                                                    // toppingKey [salad, cheese, meat, bacon] và value +1 (more button +1 in amount )
                                                    onClick={() => onHandleAmountIngredient(toppingKey, +1)}>
                                                        MORE
                                                </button>
                                            </td>
                                            <td className="unitPrice">${price}</td>
                                            {/* <td className="Price">$ {price * makeOrder[toppingKey] }</td> */}
                                            <td className="Price">$ {price * makeOrder[toppingKey]}</td>
                                        </tr>
                                    );
                            })}
                        
                            <tr className="fw-bold">
                                <td>Total Cost (Not Tax)</td>
                                <td>$ {totalPrice}</td>
                            </tr>

                            <tr className="fw-bold">
                                <td>Sale Tax (10%)</td>
                                <td>$ {Tax}</td>
                            </tr>

                            <tr className="fw-bold">
                                <td>ToTal Cost (Taxed)</td>
                                <td>$ {priceAfterTax}</td>
                            </tr>
                       
                    </tbody>
                </table>

                <div>
                    <button color="var(--bg-color-primary)" className="mx-3 mt-3" onClick={() => onMakeOrder()}>ORDER NOW</button>
                    <button className="mx-3" onClick={() => onResetOrder()}>Reset</button>
                </div>
           </div>
        )
    }
}   