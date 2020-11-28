import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundSlider from "react-background-slider";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

ReactDOM.render(
    <BackgroundSlider
        images={['images/bg01.jpg', 'images/bg02.jpg', 'images/bg03.jpg',
                 'images/bg04.jpg', 'images/bg05.jpg', 'images/bg01.jpg']}
        duration={5}
        transition={3}
    />,
    document.getElementById('background-slider')
);

reportWebVitals();
