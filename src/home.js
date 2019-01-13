import React, { Component } from 'react'
import './css/home.css';
import logo from './test2.png'
import Proc from "./components/imageprocessor"


export default class Home extends Component {
 

    


        render() {
        return(

          <div className="homebox">
        
         <Proc image={logo}/>
         
         
        
        
       </div>
          )
        }
        
      
        

}
