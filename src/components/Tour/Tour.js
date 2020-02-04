import React, { Component } from 'react';
import "./Tour.scss";

class TourList extends Component{
    state={
     showInfo:false
    };
    handelInfo=()=>{
        this.setState({showInfo:!this.state.showInfo});
    }
    render(){
        const{id,city,name,img,info}=this.props.tour;
        const{removeTour}=this.props;
      return ( 
      
               <article className="tour">
                   <div className="img-container">
                     <img  src={img} alt=""/>
                     <span className="close-btn" onClick={()=>{removeTour(id);}}>
                         <i className="fa fa-window-close"/>
                     </span>

                   </div>
                   <div className="tour-info">
                       <h3>{city}</h3>
                       <h4>{name}</h4>
                       <h5>
                           info{" "}
                            <span onClick={this.handelInfo}>
                            Down
                            <i className="fa fa-caret-square-down"></i>                          
                            </span>
                            
                       </h5>
                       {this.state.showInfo &&  <p>  {info} </p>}
                       
                   </div>
               </article>
        
        );
    }
}
export default TourList;