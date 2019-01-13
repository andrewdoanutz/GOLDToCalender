import React, { Component } from 'react'




var Tesseract=window.Tesseract;
var wordsbool=false;
var info="n/a";



export default class Proc extends Component {
  constructor(props){
    super(props);
    this.state={
      words:"n/a",
     
    }
  
  };
  

componentDidMount(){
  let self=this;
  console.log("working");
    Tesseract
    .recognize(self.props.image)
    .then(function(result){
      console.log(result);
      info=result.text;
      console.log({info})
      wordsbool=true;
      self.setState({words:info});
    })
   
    
}

        render() {
         if(wordsbool===false){
           return(
             <div className="homebox">
             Loading...
             </div>
             
           )
           
          }
         
         else{
          
        return(

          <div className="homebox">
        
           
         <div>result:</div>
         <div>{this.state.words}</div>
         
         
         
        
        
       </div>
          )
        }
        
      }
        

}
