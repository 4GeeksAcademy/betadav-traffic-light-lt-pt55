import React from 'react'
import ReactDOM from 'react-dom/client'
import Trafficlight from './TrafficLight';


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Trafficlight />);
