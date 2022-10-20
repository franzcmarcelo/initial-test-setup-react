import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ initialValue }) => {

  const [count, setCount] = useState(initialValue);
  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);
  const habdleReset = () => setCount(initialValue);

  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid="test-counter" >{count}</h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={habdleReset}> Reset </button>
    </>
  )
}

Counter.propTypes = {
  initialValue: PropTypes.number
}

Counter.defaultProps = {
  initialValue: 0
}

export default Counter;