import React, { Component } from 'react'
import './css/home.css';
import Proc from "./components/imageprocessor"
import ImageUploader from 'react-images-upload';



export default class Home extends Component {
  constructor(props) {
    super(props);
     this.state = { pictures: [],
      imageuploaded:false };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
        
      imageuploaded:true
    }
    );
    console.log("uploaded")
}


    


        render() {
          if(this.state.imageuploaded){
            return(
              
            <Proc image={this.state.pictures[0]}/>
            )
          }
          else{
        return(
          
          <div className="homebox">
          <strong className="homehead">Upload an Image to get started</strong>
            <div class="row">
              <div class="col-md-6 col-md-offset-3" className="uploader">
                <ImageUploader
                      withIcon={true}
                      buttonText='Choose image'
                      onChange={this.onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                />
              </div>
            </div>
          </div>
          )
        }
        
      
      }

}
