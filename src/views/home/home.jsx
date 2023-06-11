import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomerBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('传递的数据'))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      {/* 1.轮播图 */}
      <HomerBanner />
      {/* 2.主体内容 */}
      <div className="content">
        {/* 折扣 */}
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {/* 推荐 */}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {/* 向外城市 */}
        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {/* 性价比 */}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {/* 评分 */}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {/* plus房源 */}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home