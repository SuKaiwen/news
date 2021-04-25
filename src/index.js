import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import News from './img/news.jpg';
import Header from './Header';
import NavigationBar from './NavigationBar';

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <Header />
    <div className = "main_body">
        <div className = "main_line">
            <div id = "politics"></div>
            <App term = {"Politics"} number = {"01"} />
            <div id = "business"></div>
            <App term = {"Business"} number = {"02"} />
            <div id = "tech"></div>
            <App term = {"Tech"} number = {"03"} />
            <div id = "health"></div>
            <App term = {"Health"} number = {"04"} />
            <div id = "sports"></div>
            <App term = {"Sports"} number = {"05"} />
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
