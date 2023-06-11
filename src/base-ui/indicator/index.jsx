import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 公式： 2.offsetLeft + 2.width*0.5 - indicator*0.5
    // console.log(contentRef.current.children[selectIndex])
    // 1.获取selectIndex对应的item
    const selectEl = contentRef.current.children[selectIndex]
    const itemOLeft = selectEl.offsetLeft
    const itemWidth = selectEl.clientWidth

    // 2.content宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 3.获取selectIndex要滚动的距离
    let distance = itemOLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 4.特殊位置处理
    if (distance < 0) distance = 0 // 左边临界处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边临界处理

    // 5.移动位置
    contentRef.current.style.transform = `translate(${-distance}px)`

  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator