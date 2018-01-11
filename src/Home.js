import React, { Component } from 'react'
import logo from './communityBank.svg'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    login (){
        
    }

    render() {
        return (
            <div className="layout">
                <div><img src={logo} alt="logo" width="300px"/></div>
                <button onClick={this.login}>Log In</button>
            </div>
        )
    }
}

export default Home
