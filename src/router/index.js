import React from "react"
import { Navigate } from "react-router-dom"

import Demo from "@/views/demo"
// 路由懒加载 开始会渲染两次 Suspense一次
const Home = React.lazy(() => import('@/views/home/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const Entire = React.lazy(() => import('@/views/entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes