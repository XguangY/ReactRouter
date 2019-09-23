import React from 'react'
import { BrowserRouter  as Router, Route, Link} from 'react-router-dom'
import Index from './pages/index'
import List from './pages/list'
import Home from './pages/home'

function AppRouter () {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/List/123">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index}/>
            <Route path="/List/:id" component={List}/>
            <Route path="/Home/" component={Home}/>
        </Router>
    )
}

export default AppRouter