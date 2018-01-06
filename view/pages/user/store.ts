import  { Store, action } from 'redux-zero-x'
import { fetchJSONByGet } from '../../util/ajax'

class CounterStore extends Store {

  constructor() {
    super()
    this.state = {
      count: 0,
      random: Math.random(),
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

  // @action()
  // async getRandom(param) {
  //   return { random: await fetchJSONByGet('/list', param) }
  // }

}

export default CounterStore