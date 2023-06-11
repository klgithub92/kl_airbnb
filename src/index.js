import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from '@/App';
import 'normalize.css'
// import "antd/dist/antd.less"
import '@/assets/css/index.less'
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Suspense解决路由懒加载显示
  <Provider store={store}>
    {/* <Suspense fallback={<h2>loading...</h2>}> */}
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
    {/* </Suspense> */}
  </Provider>

);
