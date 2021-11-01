import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from './AppRouter'
import RouterDemo  from './Router/RouterDemo';
// import TodoList from './TodoList'

// ReactDom.render(<TodoList />, document.getElementById('root'))
ReactDom.render(<AppRouter />, document.getElementById('root'))


ReactDom.render(<RouterDemo />, document.getElementById('routerBox'))