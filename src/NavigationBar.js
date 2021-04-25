import './App.css';
import React, {Component} from 'react';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var currentDay = mm + '/' + dd + '/' + yyyy;

function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <a class="navbar-brand" href="#">NEXTNEWS</a>
      <a style = {{color:"#d3d3d3", marginRight:"50px"}}>Today is {currentDay}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#politics">Politics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#business">Business</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tech">Tech</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#health">Health</a>
           </li>
           <li class="nav-item">
            <a class="nav-link" href="#sports">Sports</a>
           </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;