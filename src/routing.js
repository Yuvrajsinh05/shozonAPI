import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home'
import Listing from './Component/listing/listing';
import Footer from './footer';




const Routing = () => {
    return(
        <BrowserRouter>
             <Route exact path="/" component={Home}/>
             <Route path="/listing/:id" component={Listing}/>
             <Footer/>
        </BrowserRouter>
    )
}

export default Routing;