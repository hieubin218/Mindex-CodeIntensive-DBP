import React, { Component } from 'react';
import BurgerCheckOut from '../BurgerCheckOut SubComponent/BurgerCheckOut';
import BurgerBuilder from '../BurgerBuilder SubComponent/BurgerBuilder';
import "./BurgerMenu.css";

class BurgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    foodID: 1,
                    name: "Salad",
                    price: 1.75,
                },
                {
                    foodID: 2,
                    name: "Cheese",
                    price: 3.0,
                },
                {
                    foodID: 3,
                    name: "Meat",
                    price: 5.75,
                },
                {
                    foodID: 4,
                    name: "Bacon",
                    price: 5.25,
                }
            ],

            // default state
            makeOrder: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0,
            }
            
        }
    }

    // Method (More and Less) button
    onHandleAmountIngredient = (id) => {
        console.log(id);
    }


    // Reset Button
    onResetOrder = () => {
        this.setState({
            makeOrder: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0,
            }})
    }

    render() {
        const {menu, makeOrder} = this.state;
        return (
            <div>
                <h1 className="text-center mt-4">L'Demajor Burger</h1>
                <div className="byRow">
                    <div className="burger-Builder">
                        <BurgerBuilder order={makeOrder}/>
                    </div>
                    
                    <BurgerCheckOut 
                        makeOrder = {makeOrder}
                        menu={menu} 
                        onHandleAmountIngredient={this.onHandleAmountIngredient}
                        onResetOrder = {this.onResetOrder}
                    />
                </div>
            </div>
        );
    }
}

export default BurgerMenu;