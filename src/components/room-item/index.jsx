import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating'
import { Carousel } from 'antd'
import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const sliderRef = useRef()
  const [selectIndex, setSelectIndex] = useState(0)

  function controlClickHandle(isNext = true, event) {
    // 上一个面板/下一个面板
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1 // 回到最后一个
    if (newIndex > length - 1) newIndex = 0 // 回到第一个
    setSelectIndex(newIndex)

    // 阻止冒泡
    event.stopPropagation()
  }

  /** 跳转到详情页 事件处理*/
  function itemClickHandle() {
    if (itemClick) itemClick(itemData) // 交出去让用他的人处理
  }

  // 首页图片
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  // 轮播图
  const sliderElement = (
    < div className="slider" >
      {/* 按钮控制 */}
      <div div className="control" >
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div >
      {/* 底部圆点 */}
      <div div className="indicator" >
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='item' key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div >
      {/* 轮播图片 */}
      <Carousel Carousel dots={false} ref={sliderRef} >
        {
          itemData?.picture_urls?.map((item, index) => {
            return (
              <div key={item} className='cover'>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel >
    </div >
  )

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* 首页没有轮播图 判断 */}
        {!itemData.picture_urls ? pictureElement : sliderElement}

        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>

        <div className='bottom'>
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem