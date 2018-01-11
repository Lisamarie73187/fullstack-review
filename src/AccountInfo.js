import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class AccountInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>AccountInfo</h1>
                {this.props.user && <p>You are logged in as <strong>{this.props.user.name}</strong></p>}
                {!this.props.user && <p>you must login <Link to="/">Log In</Link></p> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(AccountInfo)
