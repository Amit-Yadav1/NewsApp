import React from 'react'
import pic from "../assets/Images/pic.jpg"
export default function NewsItem (props) {
  return (
      <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
        <div className="card mt-1 " >
  <img src={props.pic?props.pic:pic} height="200px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title heading">{props.title?props.title.slice(0,100)+"...":""}</h5>
    <p className="card-text">{props.date}</p>
    <p className="card-text bg-secondary text-light text-center">{props.source.name}</p>
    <p className="card-text desc">{props.description}</p>
    <a href={props.url} className="btn mybtn background w-100 text-light">Read Full Article</a>
  </div>
</div>
</div>
    )
  }
