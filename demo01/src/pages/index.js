import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, context: 'adfasdasd-1' },
                { cid: 456, context: 'adfasdas-2' },
                { cid: 789, context: 'adfasdas-3' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h3>Index21</h3>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return <li key={index}>
                                <Link to={'/List/' + item.cid}>
                                    {item.context}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Index;