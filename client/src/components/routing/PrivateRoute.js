import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    <Route {...rest} render={props => (!loading ? !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} /> : <div>Loading...</div>)} />
)

PrivateRoute.propTypes = {
    auth: propTypes.object.isRequired,
}

const mapStatetoProps = state => ({
    auth: state.auth,
})
export default connect(mapStatetoProps)(PrivateRoute)
