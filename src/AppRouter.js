import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoList from './TodoList'
import Home from './Home'

// function Index() {
//   return <h2>MaYue.com</h2>
// }

// function List() {
//   return <h2>List Page</h2>
// }

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">代办列表</Link></li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/list/" component={TodoList} />
    </Router>
  )
}

export default AppRouter;