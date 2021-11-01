import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
        cid: 123,
        title: 'Channel No.1'
      }, {
        cid: 456,
        title: 'Channel No.2'
      }, {
        cid: 789,
        title: 'Channel No.5'
      }]
    }
  }
  render() {
    return (
      <ul>
        { this.state.list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={'/link/'+item.cid}>{ item.title }</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default List