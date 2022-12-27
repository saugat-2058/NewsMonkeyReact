import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
      const {title,desc,imageUrl,newsUrl,author,date,source}=this.props;
      
    return (
        <div className="card my-3" >
        <img src={imageUrl} className="card-img-top" height='150px' style={{'objectFit':'cover'}} alt="..."/>
        <div className="card-body">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1'}}>
    {source}
    {/* <span class="visually-hidden">unread messages</span> */}
  </span>
          <h5 className="card-title">{title.substr(0,35)}...</h5>
          <p className="card-text">{desc.substr(0,60)}...</p>
          <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
