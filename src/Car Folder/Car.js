import React, {Component} from "react";
import "./Car.css";

/**
 * Store data (img url) into constructor as default state
 * Change url when button clicked
 */
 
export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar: "Assets-Image/red-car.png",
        }
    }

    changeColor = (color) => {
        this.setState( {
            selectedCar: color,
        });
    }

    render() {
        return (
            <div className="car">
                <div className="car_left">
                    <h2> Please Choose your favorite Car's color</h2>
                    <img src={this.state.selectedCar} />
                </div>

                <div className="car_right">
                    <button
                        class="button red"
                        onClick={() => this.changeColor("Assets-Image/red-car.png")}>
                            Red
                    </button>

                    <button
                        className="button black"
                        onClick={() => this.changeColor("Assets-Image/black-car.png")}>
                            Black
                    </button>

                    <button
                        className="button white"
                        onClick = { () => this.changeColor("Assets-Image/white-car.png")}>
                           White
                    </button>

                </div>

            </div>
        )
    }
}
