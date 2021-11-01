import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/index'
import Video from './pages/video';
import Work from './pages/work';
import './index.css'

function RouterDemo() { 
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/video/">视频教程</Link></li>
            <li><Link to="/work/">工作指南</Link></li>
          </ul>
        </div>

        <div className="rightMain">
          <Route path="/" exact component={Index}></Route>
          <Route path="/video/" component={Video}></Route>
          <Route path="/work/" component={Work}></Route>
        </div>
      </div>
    </Router>
  )
}

export default RouterDemo