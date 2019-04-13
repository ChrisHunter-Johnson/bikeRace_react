import React, { Component } from "react";
import {Card} from 'primereact/card'
import "../css/main.css"

export  class Home extends Component {
render() {
 
return (

 <Card title="You have found the Boulder Bike Tour site!!"   className="ui-card-shadow" >
  <span className="home-card-text">


   <h4> Here are all the tools to enjoy the great 2019 bike tour</h4>
   <table class="table table-striped">
   <tbody>
    <tr>
     <td> All the details, bio and recent times of your favourite riders can be found on the Riders tab</td>
    </tr>
    <tr>
     <td> Images from prior year events - see Images tab. You will be amazed!!</td>
     </tr>
     <tr>
     <td> To track the progress of the riders live check out our live map </td>
     </tr>
     <tr>
     <td> You love to win right!! Send in your suggestion for this year's slogan. Great prizes</td>
    </tr>
   </tbody>
   </table>
  </span>
 </Card>

);
}
}
