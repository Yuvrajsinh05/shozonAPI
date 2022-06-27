import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import ListedData from "./listingDisplay"
import Header from "../../header";
import './style.css'
import Footer from "../../footer";

const url =  "https://shozon.herokuapp.com/product/category_id="

class Listing extends Component{
    constructor(props){
        super(props)

        this.state={
            itemData:''
        }
    }
    render(){
        return(
            <>
             <Header/>
             <div>
                <ListedData listData={this.state.itemData}/>
                {/* <Footer/> */}
             </div>
            </>

        )
    }
    async componentDidMount(){
        console.log(this.props.location.pathname)
        let restId = this.props.location.pathname.split('=')[1];
        const categoryId = restId.split('/')[0]
        const typeID = restId.split('/')[1]
        console.log(categoryId,typeID)
        let response = await axios.get(`${url}${categoryId}?type_id=${typeID}`)
        console.log("url",response)
        this.setState({itemData:response})
    }
}
export default Listing;