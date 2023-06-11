import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = currentPage => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = roomList => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = totalCount => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = isLoading => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

// 异步网络请求
export const fetchEntireRoomList = (page = 0) => {
  return async (dispatch, getState) => {
    // 0.修改currentPage
    dispatch(changeCurrentPageAction(page))

    // 1.根据页码获取最新数据
    dispatch(changeIsLoadingAction(true)) // 发起网络请求前遮盖
    // const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(page * 20) // 发起网络请求
    dispatch(changeIsLoadingAction()) // 成功获取数据 去除遮盖

    // 2.获取最新的额数居 保存到redux的store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}