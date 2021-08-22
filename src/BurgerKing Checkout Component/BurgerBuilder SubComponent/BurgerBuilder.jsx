import React, { Component } from 'react';
import "./BurgerBuilder.css";


class BurgerIngredients extends Component {
    render() {
        // Receive props from parents Components.



        // Method: render the toppiing of Hamburger


        
        return (
            <div clasName="hamburger">
                <div className="box">
                    <h4 clsssName="text-center">Your Taste Burger</h4>
                    <div className="bread-top">
                        <div className="seeds1-toLeft" />
                        <div classname="seeds2-toRight" />
                    </div>
                    <div>
                        <p className="text-center">Please Choose Your Favorite Topping</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default BurgerIngredients;