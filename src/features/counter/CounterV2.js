import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'

export default function Counter() {
  const count = useSelector(selectCount)
    , dispatch = useDispatch()

  const [stepNum, setStepNum] = useState(10)

  return (<>
    <h3>counter v2</h3>
    <div>
      <button onClick={() => dispatch(decrement())} children='-' />
      <span> {count} </span>
      <button onClick={() => dispatch(increment())} children='+' />
    </div>
    <div>
      <input value={stepNum} onChange={e => setStepNum(e.target.value)} type='number' placeholder='step' />
      <button onClick={() => dispatch(incrementByAmount(stepNum))} children='Add Amount' />
      <button onClick={() => dispatch(incrementAsync(stepNum))} children='Add Async' />
    </div>
  </>)
}
