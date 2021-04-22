import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import News from './img/news.jpg';

ReactDOM.render(
  <React.StrictMode>
    <div className = "container">
        <div className = "parallax">
            <div className = "centered">
                <h1 style = {{fontSize: "50px", letterSpacing:"10px"}}>NEXTNEWS</h1>
                <h1 style = {{fontSize: "15px"}}>All in One News Viewing Platform</h1>
            </div>
        </div>
    </div>
    <div className = "main_body">
        <div className = "main_line">
            <App />
        </div>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
