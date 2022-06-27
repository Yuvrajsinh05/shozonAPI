for (let i = 0; i < proData.length; i++) {
    // console.log(proData[i]
  
    if (i % 2 == 0) {
        let a = proData[i]
        console.log(i,"check this EVEN",a)  
        
        return(
            <>
             <div className="row">
                <h2 className="proHead text-center">{proData[i].Category} <i className="fa-solid fa-shirt"></i></h2>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src={proData[i].img[0]} alt="" />
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> {proData[i].type[0]}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src={proData[i].img[1]} alt="" />
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> {proData[i].type[1]}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-3 colmm">
                    <div className="gridboox">
                        <div className="h-75 dd1">
                            <img className="w-100 h-100 p-2" src={proData[i].img[2]} alt="" />
                        </div>
                        <div className="h-25 dd1">
                            <h3 className="text-center"> {proData[i].type[2]}</h3>
                        </div>
                    </div>
                </div>
            </div>
            </>)
    }
                    
                 
    else{
        let b = proData[i]
        console.log(i,"check this ODD",b)
        return (
            <>
                {/* <div className="row">
                    <a href="">
                        <div className="col-12 p-1 colmm">
                            <div className="gridboox ">
                                <div className="h-75">
                                    <div className="innerpro h-100"><a href="">
                                        <center class="h-100"><img class="h-100 w-75" src={b.img[0]} alt="" />
                                        </center>
                                    </a></div>
                                    <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src={b.img[1]} alt="" />
                                        </center>
                                    </a></div>
                                    <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src={b.img[2]} alt="" />
                                        </center>
                                    </a></div>
                                    <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src={b.img[3]} alt="" />
                                        </center>
                                    </a></div>
                                    <div className="innerpro h-100"><a href="">
                                        <center className="h-100"><img className="h-100 w-75" src={b.img[4]} alt="" />
                                        </center>
                                    </a></div>
                                </div>
                                <div className="h-25">
                                    <h3 className="text-center pt-3">{b.Category}</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <hr /><br /> */}

            </>
        )
    }}