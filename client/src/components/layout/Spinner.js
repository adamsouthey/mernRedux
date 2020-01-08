import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const styles = {
    spinner: {
        width: '200px',
        margin: '0 auto',
        display: 'block',
    },
}

export const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} style={styles.spinner} alt="Loading" />
        </Fragment>
    )
}
