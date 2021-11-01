import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/index'
import Video from './pages/video';
import Work from './pages/work';
import './index.css'

// 模拟动态路由配置
let routeConfig = [
  { path: '/', title: '博客首页', exact: true, component: Index },
  { path: '/video/', title: '视频教程', exact: false, component: Video},
  { path: '/work/', title: '工作指南', exact: false, component: Work}
]

function RouterDemo() { 
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          {/* <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/video/">视频教程</Link></li>
            <li><Link to="/work/">工作指南</Link></li>
          </ul> */}

          {/* 动态渲染路由 */}
          <ul>
            { routeConfig.map((item, idx) => {
              return (<li key={idx}><Link to={item.path}>{ item.title }</Link></li>)
            })}
          </ul>
        </div>

        <div className="rightMain">
          {/* <Route path="/" exact component={Index}></Route>
          <Route path="/video/" component={Video}></Route>
          <Route path="/work/" component={Work}></Route> */}

          {/* 动态渲染路由 */}
          { routeConfig.map((item, idx) => {
            return (<Route key={idx} path={item.path} exact={item.exact} component={item.component}></Route>)
          })}
        </div>
      </div>
    </Router>
  )
}

export default RouterDemo