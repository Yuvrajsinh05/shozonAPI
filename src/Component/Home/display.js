import React,{Component} from 'react';
import './home.css'
import Products from './products'



// const url = "https://zapiii.herokuapp.com/quicksearch"
const url = "https://shozon.herokuapp.com/home"
class Display extends Component{
    constructor(){
        super()

        this.state={
            prod:''
        }
    }

    render(){
        return(
            <div>
               <Products proData={this.state.prod}/>
            </div>
        )
    }


    //api calling



    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) =>res.json())
        .then((data)=>{
            this.setState({prod:data})
        })
    }

}

export default Display