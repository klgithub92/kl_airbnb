import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchEntireRoomList } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  // 发起网络请求 获取房屋列表/页码等...
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomList())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire