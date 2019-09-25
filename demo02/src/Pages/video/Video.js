import React from 'react'
import { Route, Link} from 'react-router-dom'
import ReactPage from './reactPage'
import Vue from './Vue'
import Fullter from './Fullter'

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">react教程</Link></li>
                    <li><Link to="/video/vue">vue教程</Link></li>
                    <li><Link to="/video/fullter">fullter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage" component={ReactPage}></Route>
                <Route path="/video/vue" component={Vue}></Route>
                <Route path="/video/fullter" component={Fullter}></Route>
            </div>
        </div>
    )
}

export default Video