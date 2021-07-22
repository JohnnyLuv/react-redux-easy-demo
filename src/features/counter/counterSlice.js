import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // Redux Toolkit 允许我们在 reducer 中编写 "mutating" 逻辑
    // 它实际上并不改变状态，因为它使用 Immer 库
    // 它检测到 "draft state" 的变化，并基于这些变化产生一个全新的不可变状态
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// 下面的函数被称为 thunk，它允许我们执行异步逻辑
// 它可以像常规动作一样分派: `dispatch(incrementAsync(10))`
// 这将以 `dispatch` 函数作为第一个参数调用 thunk
// 然后可以执行异步代码，并分派其他操作
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// 下面的函数被称为选择器，它允许我们从状态中选择一个值
// 选择器也可以在使用它们的地方内联定义，而不是在 slice 文件中
// 例如: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value

export default counterSlice.reducer
