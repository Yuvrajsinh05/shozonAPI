import React from "react";
import { Link } from 'react-router-dom';



const Products = (props) => {
    const listdata = ({ proData }) => {
        console.log("listedData",proData)
        if (proData) {  
         return proData.map((item)=>{
            return(
                <>
                <div className="row hulu">
                    <h2 className="proHead text-center">{item.Category} <i className="fa-solid fa-shirt"></i></h2>
                    <div className="col-lg-3 col-sm-6 p-3 colmm">
                        <Link to={`/listing/category_Id=${item.category_id}/${item.type_id[0]}`} key={item._id}>
                        <div className="gridboox">
                            <div className="h-75 dd1">
                                <img className="w-100 h-100 p-2" src={item.img[0]} alt=""/>
                            </div>
                            <div className="h-25 dd1">
                                <h3 className="text-center pt-3">{item.type[0]}</h3>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 p-3 colmm">
                    <Link to={`/listing/category_Id=${item.category_id}/${item.type_id[1]}`} key={item._id}>
                        <div className="gridboox">
                            <div className="h-75 dd1">
                                <img className="w-100 h-100 p-2 " src={item.img[1]} alt=""/>
                            </div>
                            <div className="h-25 dd1">
                                <h3 className="text-center pt-3">{item.type[1]}</h3>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 p-3 colmm">
                    <Link to={`/listing/category_Id=${item.category_id}/${item.type_id[2]}`} key={item._id}>
                        <div className="gridboox">
                            <div className="h-75 dd1">
                                <img className="w-100 h-100 p-2" src={item.img[2]} alt=""/>
                            </div>
                            <div className="h-25 dd1">
                                <h3 className="text-center pt-3"> {item.type[2]}</h3>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 p-3 colmm">
                    <Link to={`/listing/category_Id=${item.category_id}/${item.type_id[3]}`} key={item._id}>
                        <div className="gridboox">
                            <div class="h-75 dd1">
                                <img className="w-100 h-100 p-2" src={item.img[3]} alt=""/>
                            </div>
                            <div className="h-25 dd1">
                                <h3 className="text-center pt-3">{item.type[3]}</h3>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <br/><hr/>
                </>
            )
          })
            }   
        else{
            console.log("check API or if statement")
        }
    
    }
    return (
        <>
        <div className="center m-auto">
            < div id="main-content m-auto" >
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.ibb.co/3yh1RY0/slide1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/gzGjWb8/slide2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/fr9CpZD/slide5.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="grid">
                    {listdata(props)}
                </div>
            </div >
        </div>
        </>
    )
}
export default Products