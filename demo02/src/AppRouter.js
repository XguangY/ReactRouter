import React from 'react'
import { BrowserRouter  as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/video/Video'
import WorkPlace from './Pages/workPlace/WorkPlace'
import './index.css'
function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">博客首页</Link></li>
                        <li><Link to="/video/reactpage">视频教程</Link></li>
                        <li><Link to="/workplace/money">职场技能</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/video" component={Video}></Route>
                    <Route path="/workplace" component={WorkPlace}></Route>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter