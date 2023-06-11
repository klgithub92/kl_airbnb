import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  /** 从redux的store获取roomList数据*/
  const { roomList, totalCount, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  /** 处理要跳转的逻辑*/
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((itemData) => {
    navigate('/detail')
    dispatch(changeDetailInfoAction(itemData))
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem
                itemData={item}
                itemWidth='20%'
                key={item._id}
                itemClick={itemClickHandle}
              />
            )
          })
        }
      </div>
      {isLoading && <div className="room-cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms