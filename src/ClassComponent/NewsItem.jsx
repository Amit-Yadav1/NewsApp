import React, { Component } from 'react'
import pic from "../assets/Images/pic.jpg"
export default class NewsItem extends Component {
  render() {
    return (
      <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
        <div className="card mt-1 " >
  <img src={this.props.pic?this.props.pic:pic} height="200px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title heading">{this.props.title?this.props.title.slice(0,100)+"...":""}</h5>
    <p className="card-text">{this.props.date}</p>
    <p className="card-text bg-secondary text-light text-center">{this.props.source.name}</p>
    <p className="card-text desc">{this.props.description}</p>
    <a href={this.props.url} className="btn mybtn background w-100 text-light">Read Full Article</a>
  </div>
</div>
</div>
    )
  }
}
