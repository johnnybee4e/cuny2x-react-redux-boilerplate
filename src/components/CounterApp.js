import { connect } from "react-redux";
import { increment, DECREMENT, RESET } from "../actions";
import Counter from "./Counter";

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch(increment(5));
    },
    onDecrement: () => {
      dispatch({ type: DECREMENT });
    },
    onReset: () => {
      dispatch({ type: RESET })
    }
  };
};

const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterApp;
