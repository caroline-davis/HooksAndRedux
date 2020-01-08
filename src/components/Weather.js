import React from 'react';

import { connect } from 'react-redux';

function Weather(props) {
    return (
        <div>
            {"hotttt"}
            {props.label}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        wthr: state.wthr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHot: () => dispatch({type: 'HOT'}),
        onCold: () => dispatch({type: 'COLD'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)