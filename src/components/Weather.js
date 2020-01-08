import React from "react";

import { connect } from "react-redux";

function Weather(props) {
  return (
    <div>
      <button onClick={props.onHot}>is it hot?</button>
      <button onClick={props.onCold}>is it cold?</button>
      <div>{props.wthr}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wthr: state.weather
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onHot: () => dispatch({ type: "HOT" }),
    onCold: () => dispatch({ type: "COLD" })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)