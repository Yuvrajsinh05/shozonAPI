import React, { Component } from "react";
import {Link} from 'react-router-dom';


const ListedData=(props)=>{
   const renderProducts = ({listData})=>{
    console.log("LISTED DATA>>>>",listData.data)
      if(listData.data){
        console.log("img>>>>>",listData.data[0].Product[0].description,listData.data[0].Product.length)
        return listData.data[0].Product.map((item)=>{
                   console.log("land maro", listData.data[0].Product)
                    return(
                       
                        <div className="col-lg-3 col-md-6 col-sm-8 cost p-2">
                            <div className="innercolm item-box text-center">
                                <center>
                                <img className="proimg" src={item.img}  alt="nothing"/>
                               </center>
                               <div>
                            <h3 className="h33">{item.heading}</h3>
                            <h5 className="h55">{item.cost}</h5>
                            </div>
                        </div>
                        </div>    
                       
               
            
           )
        })
        
      }
      else{
        console.log("not Getting API")
      }
   }
   return(
    <div className="contt">
       <div className="filter">
            <center><h3>Brand</h3></center>
            <ul className="mt-3">
                <li><label className="radio">
                    <input type="radio" value="" name="cuisine"/> All
                </label></li>
               <li> <label className="radio">
                    <input type="radio" value="1" name="cuisine"/> Oneplus
                </label></li>
               <li><label className="radio">
                    <input type="radio" value="2" name="cuisine"/> redmi
                </label></li>
                <li><label className="radio">
                    <input type="radio" value="3" name="cuisine"/> mi
                </label></li>
                <li><label className="radio">
                    <input type="radio" value="4" name="cuisine"/> Oppo
                </label></li>
        </ul>
        <br/>
        <hr/>
            <center><h3>Cost</h3></center>
            <ul class="mt-3">
                <li><label className="radio">
                    <input type="radio" value="" name="cuisine"/> All
                </label></li>
                <li><label className="radio">
                    <input type="radio" value="100-300" name="cuisine"/> 5000-10000
                </label></li>
                <li><label className="radio">
                    <input type="radio" value="301-500" name="cuisine"/> 10000-25000
                </label></li>
                <li><label className="radio">
                    <input type="radio" value="501-900" name="cuisine"/> 25000-50000
                </label></li>
                <li><label className="radio">
                    <input type="radio" value="901-1200" name="cuisine"/> 50000-100000
                </label></li>
            </ul>
        </div>
            <div className="listing">
            <div className="row p-3 ">
                {renderProducts(props)}
                </div>
            </div>
       </div>
   )

}
export default ListedData;