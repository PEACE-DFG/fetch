// import React from 'react'
import { Link } from "react-router-dom"


function Home(props) {
 return(

  <div className='whole ' >
  <div className="container pt-4 m-auto " style={{display:'flex'}}>
    <div className="card" style={{width:'15rem'}}>
      <img src={props.img} className="card-img-top img-fluid w-100 h-50" alt="" />
      <div className="card-body">
        <h5 className="card-title">
          {props.title}
        </h5>
        <a href="" className="btn btn-primary mt-4">
          {"Price=" + "$" + props.price}
        </a>
        <p className="card-text mt-4">
          {"Discount Price" + " $" + props.discount}
        </p>
        <div>
                <Link to={`../details/${props.id}`} className="btn" style={{backgroundColor:'yellow'}}> Detail</Link> 
                <button className="btn">Buy</button>
               </div>

      </div>

    </div>

  </div>
</div>
 )
}
 
export default Home