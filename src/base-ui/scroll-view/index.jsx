import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  /** 定义内部状态*/
  const [shoRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  /** 组件渲染完成 判断是否显示右侧按钮*/
  const scrollContentRef = useRef()
  const totalDistanceRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance // 保存右侧溢出长度
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理函数*/
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const moveLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${moveLeft}px)`
    setPosIndex(newIndex)
    // 是否继续显示右侧按钮
    setShowRight(totalDistanceRef.current > moveLeft)
    setShowLeft(moveLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {shoRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView