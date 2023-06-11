import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop() // 回到顶部

  return (
    <div className='app'>
      <AppHeader />
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App