import { getMeta } from 'redux-zero-x'

/** 日志 */
async function loggerMiddleware(action, next) {
    const meta = getMeta(action)
    console.group(`${meta.name}`)
    console.log(`before ${meta.name} state: ${JSON.stringify(meta.store.state)}`)
    await next()
    console.log(`after ${meta.name} state: ${JSON.stringify(meta.store.state)}`)
    console.groupEnd()
}

export {
  loggerMiddleware
}