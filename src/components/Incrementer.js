import React from 'react'
import { incrementCounter } from '../redux/counter/actions'
import { connect } from 'react-redux';

const Incrementer = ({ increment }) => {

  return (
    <button onClick={increment}>INCREMENT</button>
  );
}

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incrementCounter());
  }
});

export default connect(null, mapDispatchToProps)(Incrementer);