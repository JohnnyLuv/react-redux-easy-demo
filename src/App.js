import CounterV1 from './features/counter/CounterV1'
import CounterV2 from './features/counter/CounterV2'
import CounterV3 from './features/counter/CounterV3'

function App() {
  return (<>
    <CounterV1 />
    <hr />
    <CounterV2 />
    <hr />
    <CounterV3 />
  </>)
}

export default App
