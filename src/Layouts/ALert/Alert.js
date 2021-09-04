import React from "react";
import PropTypes from "prop-types";


const Alert = (props) => {
    const {message, type} = props;
    return (
        <div className={`alert alert-${type} mt-3`}>
            <p>{message}</p>
        </div>
    )
};


Alert.defaultProps = {
    type: "danger",
    message: "Something wrong",
};

Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
};

export default Alert;