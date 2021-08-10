import React, {Component} from "react";
import "./Car.css";


export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedCar: "assets/img/red-car.png",
        };
    }

    changeColor = (color) => {
        this.setState({
            selectedCar: color,
        });
    };


    render() {
        return (
            <div className="car">
                <div className="car_left">
                    <h2> Please choose your car's color</h2>
                    <img src={this.state.selectedCar} />
                </div>

                <div className="car_right">
                    <button 
                        class="button red" 
                        onClick={() => this.changeColor("assets/img/red-car.png")}>
                        Red
                    </button>
                    <button 
                        class="button black"
                        onClick= {() => this.changeColor("assets/img/black-car.png")}>
                        Black
                    </button>
                    <button class="button white"
                        onClick= {() => this.changeColor("assets/img/black-car.png")}>
                        White
                    </button>
                </div>
            </div>
        )
    }
}