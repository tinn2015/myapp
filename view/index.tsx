import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app';

ReactDOM.render(<App />, document.getElementById('root'));

/** 可以解决热更新失败的问题 */
if ((module as any).hot) { 
  (module as any).hot.accept();
}
