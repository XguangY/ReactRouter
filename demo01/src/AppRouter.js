import React from 'react'
import { BrowserRouter  as Router, Route, Link} from 'react-router-dom'

function Index() {
    return ( <h3>INDEX</h3>)
}
function List() {
    return ( <h3>LIST</h3>)
}

function AppRouter () {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/List">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index}/>
            <Route path="/List" component={List}/>
        </Router>
    )
}

export default AppRouter