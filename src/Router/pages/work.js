import { Route, Link } from "react-router-dom";
import Life from "./work/life";
import Money from "./work/money";

function Work() { 
  return(
    <div>
      <div className="work">
        <ul>
          <li><Link to="/work/money/">升职加薪指南</Link></li>
          <li><Link to="/work/life/">生活指南</Link></li>
        </ul>
      </div>
      <Route path="/work/money/" component={Money} />
      <Route path="/work/life/" component={Life} />
    </div>
  )
}

export default Work