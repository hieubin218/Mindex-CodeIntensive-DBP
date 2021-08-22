import React, { Component } from 'react';
import './BurgerCheckOut.css';


class BurgerCheckOut extends Component {
    render() {
        const {menu, onHandleAmountIngredient, onResetOrder} = this.props;
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
                        menu.map((topping) => {
                            const {name, price, foodID} = topping;
                            return (
                            
                                    <tr>
                                        <td className="salad-Topping fw-bold">{name}</td>
                                        <td>
                                            <button className="mx-2 less"
                                                onClick={() => onHandleAmountIngredient(foodID, -1)}>
                                                    LESS
                                            </button>
                                            <span>1</span>
                                            <button className="mx-2 more"
                                                onClick={() => onHandleAmountIngredient(foodID, +1)}>
                                                    MORE
                                            </button>
                                        </td>
                                        <td className="unitPrice">${price}</td>
                                        <td className="Price">20</td>
                                    </tr>
                               

                                )
                        })
                    }
                </tbody>
                <tr className="fw-bold">
                    <td>Total Cost</td>
                    <td>$</td>
                </tr>

                <tr>
                    <button className="mx-3 mt-3">ORDER NOW</button>
                    <button className="mx-3" onClick={() => onResetOrder()}>Reset</button>
                </tr>

               </table>
           </div>
        );
    }
}

export default BurgerCheckOut;