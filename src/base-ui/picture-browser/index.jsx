import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { pictureUrls, closeClick } = props
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  // 当图片浏览器展示出来时, 滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  /** 关闭图片*/
  function closeBtnClickHandle() {
    if (closeClick) closeClick() // 关闭
  }

  /** 左右按钮点击*/
  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1 // 切换到最后一张
    if (newIndex > pictureUrls.length - 1) newIndex = 0 // 切换到第一张
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  /** 处理点击下方小图标 从左侧移动*/
  function bottomClickHandle(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      {/* 顶部 */}
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      {/* 中间图片展示 */}
      <div className="slider">
        {/* 控制按钮 */}
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        {/* 中间图片切换多读动画 */}
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              timeout={200}
              classNames='pic'
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      {/* 下方小图 */}
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className='toggle' onClick={e => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          <div className='list'>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div
                      className={classNames("item", { active: currentIndex === index })}
                      key={item}
                      onClick={e => bottomClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser