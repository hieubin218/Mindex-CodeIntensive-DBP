import React from "react";
import PropTypes from "prop-types";


const Button = (props) => {
    const {label, color, type, onClick} = props;
    return (
        <div>
            <button className={`btn btn-${color} search_btn`}
                    type={type}
                    onClick={onClick} >
                {label}

            </button>
        </div>
    );
};

    // Default Values for Props if dev not transmit user 
    // Typechecking with Props Types
    Button.defaultProps = {
        color: "secondary", 
        label: "Button",
        type: "button",
    };

    Button.propTypes = {
        onClick: PropTypes.func,
        color: PropTypes.string,
        type: PropTypes.string,
        label: PropTypes.string,
    };

export default Button;