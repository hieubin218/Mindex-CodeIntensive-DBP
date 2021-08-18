import React, { Component } from 'react';
import BurgerCheckOut from './BurgerCheckOut';
import BurgerIngredients from './BurgerIngredients';
import "./BurgerMenu.css";

class BurgerMenu extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center mt-4">L'Demajor Burger</h1>
                <div className="byRow">
                    <BurgerIngredients />
                    <BurgerCheckOut />
                </div>
            </div>
        );
    }
}

export default BurgerMenu;