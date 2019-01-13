import React, { Component } from 'react'
import './css/home.css';
import logo from './test2.png'
var Tesseract=window.Tesseract;

let words;
Tesseract
.recognize(logo)
.then(function(result){
  console.log(result);
  words=result;
})

export default class Home extends Component {
  render() {

    return (
      <div className="homebox">
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>result</div>
        <div>{words}</div>
        <div>hi</div>
      </div>
    )
  }
}
