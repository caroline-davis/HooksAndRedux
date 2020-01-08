import React from 'react';

import { connect } from 'react-redux';

function Weather() {
    return (
        <div>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        wthr: state.wthr.weather
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHot: () => dispatch({type: 'HOT'}),
        onCold: () => dispatch({type: 'COLD'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)