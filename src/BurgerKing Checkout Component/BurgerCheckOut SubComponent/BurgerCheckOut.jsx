import React, { Component } from 'react';
import './BurgerCheckOut.css';


export default class BurgerCheckOut extends Component {

    render() {
        // Receive props from parents Component
        const {menu, onHandleAmountIngredient, onResetOrder, makeOrder, onMakeOrder} = this.props;
        const {toppingKey} = this.props.menu;

        // Method: Calculate Total Price
        let totalPrice = 0;
        for (let item in menu) {
            // totalPrice += item[toppingKey] * makeOrder[toppingKey]
            console.log(makeOrder)
            console.log(makeOrder[toppingKey])
            
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
                            <td>Total Cost</td>
                            <td>$ {totalPrice}</td>
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