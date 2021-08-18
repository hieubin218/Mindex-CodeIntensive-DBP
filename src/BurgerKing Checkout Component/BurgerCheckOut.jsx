import React, { Component } from 'react';
import './BurgerCheckOut.css';


class BurgerCheckOut extends Component {
    render() {
        return (
           <div className="menu">
               <h4 className="text-center pd-3">Custom your Burger</h4>
               <table className="table">
                <thead>
                    <tr>
                        <td>TOPPING</td>
                        <td>OPTION</td>
                        <td>UNIT PRICE</td>
                        <td>PRICE</td>
                    </tr>
                </thead>
                <tbody>

                </tbody>

               </table>
           </div>
        );
    }
}

export default BurgerCheckOut;