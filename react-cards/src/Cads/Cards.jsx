import React, {Component} from 'react';
import Card from './CardUI';
import img1 from "../assets/doctor-character-background_1270-84.jpg";


class Cards extends Component{

    render() {
    return(
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
         <div className="col-md-4">
            <Card imgsrc ={img1} title="Doctor"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img1} title="Doctor"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img1} title="Doctor"/>
        </div>
         

      </div>


    </div>

    );
   }
}

export default Cards;