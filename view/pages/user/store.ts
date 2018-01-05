import  { Store, action } from 'redux-zero-x'

class CounterStore extends Store {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  @action()
  increment() {
    return {count: this.getState().count + 1}
  }

  @action()
  decrement() {
    return {count: this.getState().count - 1}
  }
}

export default CounterStore