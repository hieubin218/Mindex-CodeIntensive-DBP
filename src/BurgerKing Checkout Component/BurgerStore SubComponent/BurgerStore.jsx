import React, { Component} from 'react';
import BurgerCheckOut from '../BurgerCheckOut SubComponent/BurgerCheckOut';
import BurgerBuilder from '../BurgerBuilder SubComponent/BurgerBuilder';
import "./BurgerStore.css";

class BurgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    toppingKey: "salad",
                    name: "Salad",
                    price: 1.75,
                },
                {
                    toppingKey: "cheese",
                    name: "Cheese",
                    price: 3.0,
                },
                {
                    toppingKey: "meat",
                    name: "Meat",
                    price: 5.75,
                },
                {
                    toppingKey: "bacon",
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
    // type là toppingKey [salad, cheese, meat, bacon] và value [-1 (less) và +1 (more)]
    onHandleAmountIngredient = (type, value) => {
        this.setState({
            makeOrder: {
                ...this.state.makeOrder,
                [type]: this.state.makeOrder[type] + value,
            },
        })
    }


    // Reset Button by setState back to default this.state
    onResetOrder = () => {
        this.setState({
            makeOrder: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0,
            }})
    }

    onMakeOrder = () => {
        alert("Your Order has been successfully submited");
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
                        onMakeOrder = {this.onMakeOrder}
            
                    />
                </div>
            </div>
        );
    }
}

export default BurgerMenu;