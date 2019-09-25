import React from 'react'
import { Route, Link} from 'react-router-dom'
import GetUp from './getUp'
import Money from './money'

function WorkPlace() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/getup">早起教程</Link></li>
                    <li><Link to="/workplace/money">加薪教程</Link></li>
                </ul>
            </div>
            <div className="workplaceContent">
                <div><h3>职场秘籍</h3></div>
                <Route path="/workplace/getup" component={GetUp}></Route>
                <Route path="/workplace/money" component={Money}></Route>
            </div>
        </div>
    )
}

export default WorkPlace