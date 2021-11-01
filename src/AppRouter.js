import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoList from './TodoList'
import List from './List'
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
        <li><Link to="/todoList/123">代办列表</Link></li>
        <li><Link to="/list/">传参列表</Link></li>
      </ul>
      <Route path="/" exact component={Home} />
      {/* 在 route 上设置允许动态传值。以 : 开始，紧跟传递的key值 */}
      <Route path="/todoList/:id" component={TodoList} />
      <Route path="/list/" exact component={List} />
    </Router>
  )
}

export default AppRouter;