import React from 'react';

const Loading = () => {
    return (
        <div>
            {/** src nằm ở public folder */}
            <img
                style={{
                    borderRadius: "100%",
                    margin: "0 auto",
                    display: 'block',
                    width: "300px",
                    height: "200px",
                
                }}
                src="images/Spinning.gif" alt="spinner" />
        </div>
    )
        }
     

export default Loading;

// by CSS:
    // keyword: @keyframes CSS
    // position, box-shadow, before, after,....

// by Spinning Image:
    