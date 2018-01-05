import { Store } from 'redux-zero-x'
import { loggerMiddleware } from './util/middleware'
import CounterStore from './pages/user/store'

Store.use(loggerMiddleware)

export default {
  counterStore: new CounterStore()
}
