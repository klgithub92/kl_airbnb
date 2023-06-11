import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'
import { fetchEntireRoomList } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  /** 从redux的store获取roomList数据*/
  const { currentPage, totalCount, roomList } = useSelector(state => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList
  }), shallowEqual)

  // 小算法:必须掌握
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  /** 事件处理的逻辑 */
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    // 回到顶部
    window.scrollTo(0, 0)
    // 更新最新的页码: redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchEntireRoomList(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} onChange={pageChangeHandle} />
            <div className='desc'>
              第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination