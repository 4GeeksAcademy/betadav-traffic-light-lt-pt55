import React from "react";
import { useState } from "react";

const TrafficLight = () => {

    // Initially, no light is active

    const [activeLight, setActiveLight] = useState(null);

    // Define shadow styles (can be more complex for different colors if needed)

    const shadowStyle = '0 0 10px 5px rgba(8, 227, 243, 0.6)';

    const setColor = (lightColor) => {
        setActiveLight(lightColor); // Update the state with the clicked color
    };


    return (
        <div className="container text-center">
            {/* 4. Red Light */}
            <div
                className="light-container" // Add a class for consistent styling
                onClick={() => setColor('red')} // Call setColor when clicked
                style={{
                    backgroundColor: 'red',
                    boxShadow: activeLight === 'red' ? shadowStyle : 'none', // Conditional shadow
                    ...styles.light // Apply common light styles
                }}
            >
                Red
            </div>

            {/* 5. Yellow Light */}
            <div
                className="light-container"
                onClick={() => setColor('yellow')}
                style={{
                    backgroundColor: 'yellow',
                    boxShadow: activeLight === 'yellow' ? shadowStyle : 'none',
                    ...styles.light
                }}
            >
                Yellow
            </div>

            {/* 6. Green Light */}
            <div
                className="light-container"
                onClick={() => setColor('green')}
                style={{
                    backgroundColor: 'green',
                    boxShadow: activeLight === 'green' ? shadowStyle : 'none',
                    ...styles.light
                }}
            >
                Green
            </div>
        </div>
    );
};

// Styles for the traffic light elements
const styles = {
    light: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        margin: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for shadow
    },
};

export default TrafficLight;