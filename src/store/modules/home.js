import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services/modules/home'

// 异步网络请求
export const fetchHomeDataAction = createAsyncThunk('fetchdata', async (payload) => {
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {} // 高性价比数据title和list
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer