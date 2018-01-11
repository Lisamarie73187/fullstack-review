import React, { Component } from 'react'
import { connect } from 'react-redux'



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
                <p>you are logged in as: {this.props.user.name}</p>
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
