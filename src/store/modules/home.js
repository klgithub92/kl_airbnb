import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from '@/services/modules/home'

// 异步网络请求
export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch, getState }) => {
  // const state = getState() ->处理那些如传递的根据页码发送请求
  // 性价比
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  // 高评分
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  // 折扣
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  // 推荐
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })
  // 向外城市
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
  // plus房源
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}, // 高性价比数据title和list
    highScoreInfo: {}, // 高评分
    discountInfo: {}, // 折扣
    recommendInfo: {}, // 热门推荐
    longforInfo: {},// 向外城市
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer