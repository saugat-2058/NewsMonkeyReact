import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
      const {title,desc,imageUrl,newsUrl}=this.props;
      
    return (
        <div className="card my-3" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" height='150px' style={{'object-fit':'cover'}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.substr(0,35)}...</h5>
          <p className="card-text">{desc.substr(0,60)}...</p>
          <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
