import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter }) => {
  return (
    <div>{counter}</div>
  );
}

const mapStateToProps = state => {
  return { counter: state.counter}
}

export default  connect(mapStateToProps, null)(Counter);
