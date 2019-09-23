import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h3>List ==> {this.state.id}</h3> );
    }
    componentDidMount() {
        this.setState({id: this.props.match.params.id})
    }
}
 
export default List;