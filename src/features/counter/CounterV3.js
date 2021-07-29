import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAsync } from './counterSlice'

export default function Counter() {
  const { counter } = useSelector(state => state)
    , dispatch = useDispatch()

  const [stepNum, setStepNum] = useState(100)

  return (<>
    <h3>counter v3</h3>
    <div>
      <button onClick={() => dispatch({ type: 'counter/decrement' })} children='-' />
      <span> {counter.value} </span>
      <button onClick={() => dispatch({ type: 'counter/increment' })} children='+' />
    </div>
    <div>
      <input value={stepNum} onChange={e => setStepNum(e.target.value)} type='number' placeholder='step' />
      <button onClick={() => dispatch({ type: 'counter/incrementByAmount', payload: stepNum })} children='Add Amount' />
      <button onClick={() => dispatch(incrementAsync(stepNum))} children='Add Async' />
    </div>
  </>)
}
