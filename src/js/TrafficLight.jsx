import React from "react";
import { useState } from "react";

const TrafficLight = () => {

    const [activeLight, setActiveLight] = useState(null);

    const shadowStyle = '0 0 10px 5px rgba(200, 243, 8, 0.6)';

    const setColor = (lightColor) => {
        setActiveLight(lightColor);
    };

    return (
        <div className="container d-flex flex-column align-items-center bg-dark w-25 h-75">
            <div
                className="light-container"
                onClick={() => setColor('red')}
                style={{
                    backgroundColor: 'red',
                    boxShadow: activeLight === 'red' ? shadowStyle : 'none',
                    ...styles.light}}>
            </div>
            <div
                className="light-container"
                onClick={() => setColor('yellow')}
                style={{
                    backgroundColor: 'yellow',
                    boxShadow: activeLight === 'yellow' ? shadowStyle : 'none',
                    ...styles.light}}>
            </div>
            <div
                className="light-container"
                onClick={() => setColor('green')}
                style={{
                    backgroundColor: 'green',
                    boxShadow: activeLight === 'green' ? shadowStyle : 'none',
                    ...styles.light}}>
            </div>
        </div>
    );
};

// Styles for the traffic light elements
const styles = {
    light: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        margin: '1px',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for shadow
    },
};

export default TrafficLight;