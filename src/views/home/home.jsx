import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomerBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('传递的数据'))
  }, [dispatch])

  return (
    <HomeWrapper>
      {/* 1.轮播图 */}
      <HomerBanner />

      {/* 2.主体内容 */}
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home