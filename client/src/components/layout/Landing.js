import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">My Amazing App</h1>
                    <div className="buttons">
                        <Link className="btn btn-primary" to="/register">
                            Register
                        </Link>

                        <Link className="btn btn-primary" to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
Landing.propTypes = {
    isAuthenticated: propTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps)(Landing)
