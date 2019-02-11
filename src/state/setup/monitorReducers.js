const round = number => Math.round(number * 100) / 100

const monitorReducersEnhancer = creatStore => (
  reducer, 
  initialState, 
  enhancer
) => {
  const monitoredReducers = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log('reducer process time:', diff)

    return newState
  }
  return creatStore(monitoredReducers, initialState, enhancer)
}
export default monitorReducersEnhancer