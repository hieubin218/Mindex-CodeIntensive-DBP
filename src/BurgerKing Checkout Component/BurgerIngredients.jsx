import React, { Component } from 'react';
import "./BurgerIngredients.css";
import BurgerCheckOut from './BurgerCheckOut';


class BurgerIngredients extends Component {
    render() {
        return (
            <div clasName="hamburger">
                <div className="box">
                    <h4 clsssName="text-center">Your Taste Burger</h4>
                    <div className="bread-top">
                        <div className="seeds1-toLeft" />
                        <div classname="seeds2-toRight" />
                    </div>
                </div>

            </div>

        );
    }
}

export default BurgerIngredients;