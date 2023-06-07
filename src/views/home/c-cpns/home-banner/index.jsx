import React, { memo } from 'react'
import { BannerWrapper } from './style'
// react使用图片方法一
// import coverImg from '@/assets/img/cover_01.jpeg'

const HomerBanner = memo(() => {
  return (
    <BannerWrapper>
      {/* <img src={coverImg} alt="" /> */}
    </BannerWrapper>
  )
})

export default HomerBanner