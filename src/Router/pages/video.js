import React from 'react';
import { Route, Link } from 'react-router-dom';
import FlutterPage from './video/flutter';
import ReactPage from './video/react';
import VuePage from './video/vue';

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage">React教程</Link></li>
          <li><Link to="/video/vuepage">Vue教程</Link></li>
          <li><Link to="/video/flutterpage">Flutter教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path="/video/reactpage/" component={ReactPage} />
        <Route path="/video/vuepage/" component={VuePage} />
        <Route path="/video/flutterpage/" component={FlutterPage} />
      </div>
    </div>
  )
}

export default Video