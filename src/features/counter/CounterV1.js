import { useState } from 'react'
import { connect } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './counterSlice'

function Main(props) {
  const [stepNum, setStepNum] = useState(1)

  return (<>
    <h3>counter v1</h3>
    <div>
      <button children='-' onClick={props.sendDecrement} />
      <span> {props.counter.value} </span>
      <button children='+' onClick={props.sendIncrement} />
    </div>
    <div>
      <input value={stepNum} onChange={e => setStepNum(e.target.value)} type='number' placeholder='step' />
      <button children='Add Amount' onClick={() => props.sendIncrementByAmount(stepNum)} />
      <button children='Add Async' onClick={() => props.sendIncrementAsync(stepNum)} />
    </div>
  </>)
}

const mapStateToProps = state => state
function mapDispatchToProps(dispatch) {
  return {
    sendDecrement: () => dispatch(decrement()),
    sendIncrement: () => dispatch(increment()),
    sendIncrementByAmount: num => dispatch(incrementByAmount(num)),
    sendIncrementAsync: num => dispatch(incrementAsync(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)