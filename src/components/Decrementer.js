import React from 'react'
import { decrementCounter } from '../redux/counter/actions'
import { connect } from 'react-redux';

const Decrementer = ({ decrement }) => {
  return (
    <button onClick={decrement}>DECREMENT</button>
  );
}

const mapDispatchToProps = dispatch => ({
  decrement: () => {
    dispatch(decrementCounter());
  }
});

export default connect(null, mapDispatchToProps)(Decrementer);