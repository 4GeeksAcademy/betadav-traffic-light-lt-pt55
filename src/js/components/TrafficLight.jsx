import React from "react";
import { useState } from "react";

const TrafficLight = () => {

    const [activeLight, setActiveLight] = useState(null);

    const shadowStyle = '0 0 10px 5px rgba(243, 227, 8, 0.6)';

    const setColor = (lightColor) => {
        setActiveLight(lightColor);
    };

    return (
        <>
            <div
                className="container d-flex flex-column align-items-center"
                style={{ ...styles.stick }}>
            </div>
            <div
                className="container d-flex flex-column align-items-center rounded"
                style={{ ...styles.box }}>

                <div
                    className="light-container"
                    onClick={() => setColor('red')}
                    style={{
                        backgroundColor: 'red',
                        boxShadow: activeLight === 'red' ? shadowStyle : 'none',
                        ...styles.light
                    }}>
                </div>
                <div
                    className="light-container"
                    onClick={() => setColor('yellow')}
                    style={{
                        backgroundColor: 'yellow',
                        boxShadow: activeLight === 'yellow' ? shadowStyle : 'none',
                        ...styles.light
                    }}>
                </div>
                <div
                    className="light-container"
                    onClick={() => setColor('green')}
                    style={{
                        backgroundColor: 'green',
                        boxShadow: activeLight === 'green' ? shadowStyle : 'none',
                        ...styles.light
                    }}>
                </div>
            </div>
        </>
    );
};

const styles = {

    light: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        margin: '1px',
        display: 'flex',
        transition: 'box-shadow 0.3s ease-in-out',
    },

    stick: {
        width: '24px',
        height: '80px',
        backgroundColor: 'black',
    },

    box: {
        backgroundColor: 'black',
        width: '90px',
        height: '200px',
        padding: '10px',
    }
};

export default TrafficLight;