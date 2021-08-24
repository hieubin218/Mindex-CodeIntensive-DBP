import React, { Component } from 'react';
import ToppingItem from '../ToppingItem SubComponent/ToppingItem';
import "./BurgerBuilder.css";



class BurgerIngredients extends Component {
    render() {
        // Receive props from parents Components.
        const {makeOrder} = this.props;

        // Check if order has topping amount or not 
            // 1. check value (number) of each topping (Ex: salad: 1, bacon: 2)
        const toppingOrder = Object.values(makeOrder);

            // 2. Check each amount of topping equal 0 or not => return True or False by some() method
        const isOrder = toppingOrder.some((item) => item !== 0);
        


        // Method: render the toppiing of Hamburger
        const burgerContent = [];
        for (let topping in makeOrder) {
            const value = makeOrder[topping];
            // console.log(value)
            // console.log(topping);
            for (let i = 0; i < value; i++) {
                const ingredient = <ToppingItem type={topping} key={topping + i} />
                burgerContent.push(ingredient);
            }
        }
        


        
        return (
            <div clasName="hamburger">
                <div className="box" style={{paddingRight: "80px"}}>
                    <h4 className="pb-5">Your Taste Burger </h4>
                    <div className="bread-top">
                        <div className="seeds" />
                        <div classname="seeds2" />
                    </div>
                        {
                            isOrder ? (
                                burgerContent
                            ) : (
                                <p className="text-center">Please Choose Your Favorite Topping</p>

                            )
                        }
                    <div className="bread-bottom" />
                </div>

            </div>

        );
    }
}

export default BurgerIngredients;