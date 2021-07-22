import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())} children='+' />
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())} children='-' />
      </div>
      <div>
        <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} children='Add Amount' />
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} children='Add Async' />
      </div>
    </div>
  )
}
