import React, { Component } from 'react'
import loading from './loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div>
        <div className="container text-center mt-5">

        <img className='my-3' src={loading} alt="loading" />
        </div>
      </div>
    )
  }
}
